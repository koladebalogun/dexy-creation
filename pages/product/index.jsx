import React from "react";
import ProductCard from "@/components/productCard";
import Product from "@/models/Product";
import { connectDb } from "@/utils/db";
import axios from "axios";
import styles from "../../styles/product.module.scss";
import Navbar from "@/components/nav/Navbar";

export default function Products({ products, country }) {
  return (
    <>
      <Navbar country={country} />
      <div className={styles.product_wrapper}>
        <h1 className={styles.product_header}>Ready To Wear</h1>
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  connectDb();

  let products = await Product.find().sort({ createdAt: -1 }).lean();

  let data = await axios
    .get("https://api.ipregistry.co/?key=c40mj3hsjkp2ibyx")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },
    },
  };
}
