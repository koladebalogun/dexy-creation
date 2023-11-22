import styles from "./Style.module.css";
import { useEffect, useLayoutEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function MobilePartyWears() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.mobile_wrapper}>
      <h3>Our Party Wears</h3>

      <div>
        <div className={styles.mobile_hero}>
          <div className={styles.mobile_hero_inner} data-aos="fade-up">
            <img src='/images/image-6.webp' />
            <div className={styles.mobile_hero_inner_header}>Bold</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.mobile_hero}>
          <div className={styles.mobile_hero_inner} data-aos="fade-up">
            <img src='/images/image-7.webp' />
            <div className={styles.mobile_hero_inner_header}>
              Spicy
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.mobile_hero}>
          <div className={styles.mobile_hero_inner} data-aos="fade-up">
            <img src='/images/image-8.webp' />
            <div className={styles.mobile_hero_inner_header}>Radiant</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.mobile_hero}>
          <div className={styles.mobile_hero_inner} data-aos="fade-up">
            <img src='/images/image-9.webp' />
            <div className={styles.mobile_hero_inner_header}>Glamourous</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.mobile_hero}>
          <div className={styles.mobile_hero_inner} data-aos="fade-up">
            <img src='/images/image-10.webp' />
            <div className={styles.mobile_hero_inner_header}>
              Opulent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
