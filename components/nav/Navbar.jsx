import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  RiShoppingCart2Line,
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiHome2Line,
  RiCamera3Line,
  RiAccountPinBoxFill,
  RiContactsBook2Line,
} from "react-icons/ri";
import { BiCartAdd } from "react-icons/bi";

import { RxHamburgerMenu } from "react-icons/rx";
import { GiDress } from "react-icons/gi";

import { signIn, signOut, useSession } from "next-auth/react";
import style from "./style.module.css";
import NavMenu from "../nav-menu/NavMenu";
import WearsNavMenu from "../nav-menu/WearsNavMenu";

export default function Navbar({ country }) {
  const [visible, setVisible] = useState(false);
  const [wearsVisible, setWearsVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const { data: session } = useSession();

  console.log(session);

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

          <li onClick={() => setVisible(!visible)}>
            {session ? (
              <li className={style.li}>
                <div className={style.flex}>
                  <img src={session?.user?.image} alt="" />
                  <div className={style.name_wrapper}>
                    <span className={style.name}>{session?.user?.name}</span>
                    <RiArrowDropDownFill />
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
              <RiShoppingCart2Line
                style={{ marginRight: "6px" }}
                color="goldenrod"
              />
              <span>Cart</span>
            </Link>
          </li>
        </nav>

        <div className={style.mobile_nav}>
          <h1
            onClick={() => setNavVisible(!navVisible)}
            className={navVisible ? `${style.open}` : `${style.close}`}
          >
            <RxHamburgerMenu />
          </h1>

          {navVisible && (
            <div className={style.mobile_nav_inner}>
              <ul>
                <li>
                  <RiHome2Line />

                  <Link href="/product">Home</Link>
                </li>
                <li>
                  <GiDress />
                  <Link href="/product">Ready To Wear</Link>
                </li>
                <li>
                  <RiCamera3Line />

                  <Link href="/photoshoot">Photoshoot</Link>
                </li>
                <li>
                  <GiDress />

                  <Link href="/partywears">Party Wears</Link>
                </li>
                <li>
                  <RiShoppingCart2Line />
                  <Link href="/cart">Cart</Link>
                </li>
              </ul>

              <div>
                {session ? (
                  <>
                    <div className={style.mobile_nav_user}>
                      <img src={session?.user?.image} alt="" />
                      <span>{session?.user?.name}</span>
                    </div>

                    <div className={style.user_links}>
                      <ul>
                        <li>
                          <RiAccountPinBoxFill />

                          <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                          <BiCartAdd />

                          <Link href="/profile/orders">My Orders</Link>
                        </li>
                        <li>
                          <RiContactsBook2Line />

                          <Link href="/profile/address">Address</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <button
                        onClick={() => signOut()}
                        className={style.btn_outlined}
                      >
                        Sign out
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <button
                      onClick={() => signIn()}
                      className={style.btn_outlined}
                    >
                      Sign In
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
