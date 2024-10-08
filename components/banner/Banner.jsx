import style from "./Style.module.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className={style.banner} variants={banner}>
      <BannerRowTop title={"dexy"} />
      <BannerRowBottom title={"creation"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className={style.row_title}
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span
        className={style.row_letter}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={style.banner_row}>
      <div className={style.row_col}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className={style.row_col}
      >
        {/* <span className={style.row_message}>🌟 Elevate Your Wardrobe</span> */}
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={`${style.banner_row} ${style.center}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className={style.scroll}
      >
        <Link href="/product">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            Shop
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
          >
            Now
          </motion.span>
        </Link>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

export default Banner;
