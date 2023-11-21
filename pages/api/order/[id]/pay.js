import { createRouter } from "next-connect";
import Order from "../../../../models/Order";
import {connectDb, disconnectDb} from "../../../../utils/db";
import auth from "@/middleware/auth";

const router = createRouter().use(auth)



router.put(async (req, res) => {
  console.log("hello from api");
  await connectDb();
  const order = await Order.findById(req.body.order_id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      email_address: req.body.email_address,
    };
    const newOrder = await order.save();
    await disconnectDb();
    res.json({ message: "Order is paid.", order: newOrder });
  } else {
    await disconnectDb();
    res.status(404).json({ message: "Order is not found." });
  }
});

export default router.handler();
