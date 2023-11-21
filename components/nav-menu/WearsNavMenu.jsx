import { useState } from "react";
import Link from "next/link";
import style from "./style.module.css";

export default function WearsNavMenu() {
  return (
    <div className={style.wearsmenu}>
      <ul>
        <li>
          <Link href="/product">Ready to Wear</Link>
        </li>
        <li>
          <Link href="/photoshoot">Photoshoot</Link>
        </li>
        <li>
          <Link href="/partywears">Party Wears</Link>
        </li>
        
      </ul>
    </div>
  );
}
