import { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import { signOut, signIn } from "next-auth/react";

export default function NavMenu({ session }) {
  return (
    <div className={style.menu}>
      {/* <h4>Welcome</h4> */}
      {session ? (
        <div className={style.flex}>
          <img src={session?.user?.image} alt="" className={style.menu__img} />
          <div className={style.col}>
            <span>Hello 👋🏾,</span>
            <h3>{session?.user?.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={style.flex}>
          <button className={style.btn_outlined} onClick={() => signIn()}>
            Register / Login
          </button>
        </div>
      )}
      {session && (
        <ul>
          {/* user logged in and show these */}
          <li>
            <Link href="/profile">Account</Link>
          </li>
          <li>
            <Link href="/profile/orders">My Orders</Link>
          </li>
          <li>
            <Link href="/profile/messages">Message Center</Link>
          </li>
          <li>
            <Link href="/profile/address">Address</Link>
          </li>
          {/* <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li> */}
        </ul>
      )}
    </div>
  );
}
