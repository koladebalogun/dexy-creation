import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { useSession, signIn, signOut } from "next-auth/react";
import { connectDb } from "@/utils/db";
import Product from "@/models/Product";
import Homepage from "@/components/home/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ country, products }) {
  const { data: session } = useSession();

  return (
    <>
      <Navbar country={country} />
      <main>
        <Homepage />
      </main>
      <Footer />
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
