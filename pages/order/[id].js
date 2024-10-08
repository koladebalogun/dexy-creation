import styles from "../../styles/order.module.scss";
import Order from "../../models/Order";
import User from "../../models/User";
import { IoIosArrowForward } from "react-icons/io";
import db, { connectDb, disconnectDb } from "../../utils/db";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useReducer, useEffect } from "react";
import axios from "axios";
import { emptyCart } from "@/store/cartSlice";
import { getSession } from "next-auth/react";
import Navbar from "@/components/nav/Navbar";

function reducer(state, action) {
  switch (action.type) {
    case "PAY_REQUEST":
      return { ...state, loading: true };
    case "PAY_SUCCESS":
      return { ...state, loading: false, success: true };
    case "PAY_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "PAY_RESET":
      return { ...state, loading: false, success: false, error: false };
  }
}

export default function order({
  orderData,
  paypal_client_id,
  // stripe_public_key,
  country
}) {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [{success}, dispatch] = useReducer(reducer, {});


  useEffect(() => {
    if (!orderData._id) {
      dispatch({
        type: "PAY_RESET",
      });
    } else {
      paypalDispatch({
        type: "resetOptions",
        value: {
          "client-id": paypal_client_id,
          currency: "USD",
        },
      });
      paypalDispatch({
        type: "setLoadingStatus",
        value: "pending",
      });
    }
  }, [order]);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: orderData.total,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: orderData.user.email,
      phone_number: '070********',
      name: orderData.user.name,
    },
    customizations: {
      title: 'Dexy creations',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: async (response) => {
      console.log(response);
  
      if (response.status === 'successful') {
        try {
          // Update the order as paid
          const { data } = await axios.put(`/api/order/${orderData._id}/pay`, {
            paymentMethod: 'flutterwave',
            order_id: orderData._id,
            paymentDetails: response,
          });
          
          // Dispatch the success action
          dispatch({ type: "PAY_SUCCESS", payload: data });
          console.log('Order payment updated successfully');

          window.location.reload();
        } catch (error) {
          console.error('Error updating order payment status', error);
          dispatch({ type: "PAY_FAIL", payload: error.message });
        }
      }
  
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };
  

  function createOrderHanlder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: orderData.total,
            },
          },
        ],
      })
      .then((order_id) => {
        return order_id;
      });
  }

  function onApproveHandler(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(`/api/order/${orderData._id}/pay`,{
          details,
          order_id: orderData._id
      });
      
        dispatch({ type: "PAY_SUCCESS", payload: data });
       
      } catch (error) {
        dispatch({ type: "PAY_ERROR", payload: error });
      }
    });
  }

  function oneErrorHandler(error) {
    console.log(error);
  }

  return (
    <>
      <Navbar country={country} />
      <div className={styles.order}>
        <div className={styles.container}>
          <div className={styles.order__infos}>
            <div className={styles.order__header}>
              <div className={styles.order__header_head}>
                Home <IoIosArrowForward /> Orders <IoIosArrowForward /> ID{" "}
                {orderData._id}
              </div>
              <div className={styles.order__header_status}>
                Payment Status :{" "}
                {orderData.isPaid ? (
                  <img src="../../../images/verified.png" alt="paid" />
                ) : (
                  <img src="../../../images/unverified.png" alt="paid" />
                )}
              </div>
              <div className={styles.order__header_status}>
                Order Status :
                <span
                  className={
                    orderData.status == "Not Processed"
                      ? styles.not_processed
                      : orderData.status == "Processing"
                      ? styles.processing
                      : orderData.status == "Dispatched"
                      ? styles.dispatched
                      : orderData.status == "Cancelled"
                      ? styles.cancelled
                      : orderData.status == "Completed"
                      ? styles.completed
                      : ""
                  }
                >
                  {orderData.status}
                </span>
              </div>
            </div>
            <div className={styles.order__products}>
              {orderData.products.map((product) => (
                <div className={styles.product} key={product._id}>
                  <div className={styles.product__img}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={styles.product__infos}>
                    <h1 className={styles.product__infos_name}>
                      {product.name.length > 30
                        ? `${product.name.substring(0, 30)}...`
                        : product.name}
                    </h1>
                    <div className={styles.product__infos_style}>
                      <img src={product.color.image} alt="" /> / {product.size}
                    </div>
                    <div className={styles.product__infos_priceQty}>
                      {product.price} $ x {product.qty}
                    </div>
                    <div className={styles.product__infos_total}>
                      {product.price * product.qty} $
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.order__products_total}>
                {orderData.couponApplied ? (
                  <>
                    <div className={styles.order__products_total_sub}>
                      <span>Subtotal</span>
                      <span>{orderData.totalBeforeDiscount} $</span>
                    </div>
                    <div className={styles.order__products_total_sub}>
                      <span>
                        Coupon Applied <em>({orderData.couponApplied})</em>{" "}
                      </span>
                      <span>
                        -
                        {(
                          orderData.totalBeforeDiscount - orderData.total
                        ).toFixed(2)}
                        $
                      </span>
                    </div>
                    <div className={styles.order__products_total_sub}>
                      <span>Tax price</span>
                      <span>+{orderData.taxPrice} $</span>
                    </div>
                    <div
                      className={`${styles.order__products_total_sub} ${styles.bordertop}`}
                    >
                      <span>TOTAL TO PAY</span>
                      <b>{orderData.total} $</b>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.order__products_total_sub}>
                      <span>Tax price</span>
                      <span>+{orderData.taxPrice} $</span>
                    </div>
                    <div
                      className={`${styles.order__products_total_sub} ${styles.bordertop}`}
                    >
                      <span>TOTAL TO PAY</span>
                      <b>{orderData.total} $</b>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.order__actions}>
            <div className={styles.order__address}>
              <h1>Customer's Order</h1>
              <div className={styles.order__address_user}>
                <div className={styles.order__address_user_infos}>
                  <img src={orderData.user.image} alt="" />
                  <div>
                    <span>{orderData.user.name}</span>
                    <span>{orderData.user.email}</span>
                  </div>
                </div>
              </div>
              <div className={styles.order__address_shipping}>
                <h2>Shipping Address</h2>
                <span>
                  {orderData.shippingAddress.firstName}{" "}
                  {orderData.shippingAddress.lastName}
                </span>
                <span>{orderData.shippingAddress.address1}</span>
                <span>{orderData.shippingAddress.address2}</span>
                <span>
                  {orderData.shippingAddress.state},
                  {orderData.shippingAddress.city}
                </span>
                <span>{orderData.shippingAddress.zipCode}</span>
                <span>{orderData.shippingAddress.country}</span>
              </div>
              {/* <div className={styles.order__address_shipping}>
                <h2>Billing Address</h2>
                <span>
                  {orderData.shippingAddress.firstName}{" "}
                  {orderData.shippingAddress.lastName}
                </span>
                <span>{orderData.shippingAddress.address1}</span>
                <span>{orderData.shippingAddress.address2}</span>
                <span>
                  {orderData.shippingAddress.state},
                  {orderData.shippingAddress.city}
                </span>
                <span>{orderData.shippingAddress.zipCode}</span>
                <span>{orderData.shippingAddress.country}</span>
              </div> */}
            </div>
            {!orderData.isPaid && (
              <div className={styles.order__payment}>
                {orderData.paymentMethod == "paypal" && (
                  <div>
                    {isPending ? (
                      <span>loading...</span>
                    ) : (
                      <PayPalButtons
                        createOrder={createOrderHanlder}
                        onApprove={onApproveHandler}
                        onError={oneErrorHandler}
                      ></PayPalButtons>
                    )}
                  </div>
                )}
                {orderData.paymentMethod == "credit_card" && (
                  <div className={styles.cash}>cash</div>

                  // <StripePayment
                  //   total={orderData.total}
                  //   order_id={orderData._id}
                  //   stripe_public_key={stripe_public_key}
                  // />
                )}
                {orderData.paymentMethod == "cash" && (
                  <div className={styles.cash}>
                    <FlutterWaveButton {...fwConfig} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}



export async function getServerSideProps(context) {
  connectDb();
  const { query } = context;
  const id = query.id;
  const order = await Order.findById(id)
    .populate({ path: "user", model: User })
    .lean();
  let paypal_client_id = process.env.PAYPAL_CLIENT_ID;
  // let stripe_public_key = process.env.STRIPE_PUBLIC_KEY;

  let data = await axios
    .get("https://api.ipregistry.co/?key=c40mj3hsjkp2ibyx")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  disconnectDb();
  return {
    props: {
      orderData: JSON.parse(JSON.stringify(order)),
      paypal_client_id,
      // stripe_public_key,
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },

    },
  };
}
