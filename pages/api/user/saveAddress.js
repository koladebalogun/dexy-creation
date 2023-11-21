import {createRouter} from "next-connect";
import User from "../../../models/User";
import { connectDb, disconnectDb } from "../../../utils/db";
import auth from "@/middleware/auth";
// import auth from "../../../middleware/auth";
// const handler = nc().use(auth);

const router = createRouter().use(auth)


router.post(async (req, res) => {
  // console.log(req.user)
  try {
    connectDb();
    const { address} = req.body;
    const user = User.findById(req.user);
    await user.updateOne({
      $push: {
        address: address,
      },
    });
    res.json(address);
    disconnectDb();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler();
