import React from "react";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import { connectDb } from "@/utils/db";
import axios from "axios"


export default function Layout({ children, country }) {

  // console.log(country)
  return (
    <>
      <Navbar country={country} />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export async function getServerSideProps() {
  // connectDb();

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
      // products: JSON.parse(JSON.stringify(products)),
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },
    },
  };
}