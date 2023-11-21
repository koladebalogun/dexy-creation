import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  RiShoppingCart2Line,
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
} from "react-icons/ri";
import { GiDress } from "react-icons/gi";

import {useSession} from 'next-auth/react'
import style from "./style.module.css";
import NavMenu from "../nav-menu/NavMenu";
import WearsNavMenu from "../nav-menu/WearsNavMenu";

export default function Navbar({country}) {
  const [visible, setVisible] = useState(false);
  const [wearsVisible, setWearsVisible] = useState(false);
  const { data: session } = useSession()

  console.log(session)


  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 2.5,
      }}
      className={style.header}
    >
      <div className={style.header_inner}>
        <Link href="/">
          <img src="/images/logo2.png" alt="kelikume" className={style.logo} />
        </Link>
        <nav className={style.nav}>
          <li className={style.li}>
            <img src={country?.flag} alt="" />
            <span>{country?.name}</span>
          </li>

          <li
            onClick={() => setWearsVisible(!wearsVisible)}
            // onMouseLeave={() => setWearsVisible(false)}
          >
            <li className={style.li}>
              <div className={style.flex}>
                {/* <img src={session?.user?.image} alt="" /> */}
                {/* <span>{session?.user?.name}</span> */}
                <GiDress color="goldenrod" />
                <span>Wears</span>
                <RiArrowDropDownFill />
              </div>
            </li>

            {wearsVisible && <WearsNavMenu />}
            {/* <DropDown
              title={"Wears"}
              link1={"/ready-to-wear"}
              linkTitle1={"Ready To Wear"}
              link2={"/party-wears"}
              linkTitle2={"Party wears"}
              link3={"/photoshoot"}
              linkTitle3={"Photoshoot"}
            /> */}
          </li>

          <li
            onClick={() => setVisible(!visible)}
          >
            {session ? (
              <li className={style.li}>
                <div className={style.flex}>
                  <img src={session?.user?.image} alt="" />
                  <div className={style.name_wrapper}>

                  <span className={style.name}>{session?.user?.name}</span>
                  <RiArrowDropDownFill  />
                  </div>
                </div>
              </li>
            ) : (
              <li className={style.li}>
                <div className={style.flex}>
                  <RiAccountPinCircleLine color="goldenrod" />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
              // <li>
              //   <Link href="/login">
              //     <RiAccountPinCircleLine style={{ marginRight: "6px" }} />
              //     Login
              //   </Link>
              // </li>
            )}
            {visible && <NavMenu session={session} />}
          </li>

          <li className={style.li}>
            <Link href="/cart">
              <RiShoppingCart2Line style={{ marginRight: "6px" }} color="goldenrod" />
              <span>Cart</span>
            </Link>
          </li>

          {/* {userInfo && userInfo.isAdmin && (
            <DropDown
              title={"Admin"}
              link1={"/admin/userlist"}
              linkTitle1={"Users"}
              link2={"/admin/productlist"}
              linkTitle2={"Products"}
              link3={"/admin/orderlist"}
              linkTitle3={"Orders"}
            />
          )} */}
        </nav>
      </div>
    </motion.div>
  );
}
