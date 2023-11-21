import styles from "./styles.module.scss";
import Head from "next/head";
// import Header from "../../header";
import Sidebar from "../sidebar";
import { connectDb } from "@/utils/db";
import Navbar from "@/components/nav/Navbar";


export default function Layout({ session, tab, children, country }) {

  return (
    <div className={styles.layout}>
      <Head>
        <title>{session?.user?.name}</title>
      </Head>
      <Navbar country ={country} />
      <div className={styles.layout__container}>
        <Sidebar
          data={{
            ...session,
            tab,
          }}
        />
        <div className={styles.layout__content}>{children}</div>
      </div>
    </div>
  );
}
