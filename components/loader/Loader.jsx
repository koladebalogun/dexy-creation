import style from "./Style.module.css";
import React from "react";
import { motion } from "framer-motion";

import Image from "../../components/image/Image";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className={style.loader}>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image1" />
        <motion.div variants={itemMain} className={style.transition_image}>
          <motion.img layoutId="main-image-1" src={"./images/image-2.webp"} />
        </motion.div>
        <ImageBlock variants={item} id="image3" />
        <ImageBlock variants={item} id="image4" />
        <ImageBlock variants={item} id="image5" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`${style.image_block}${style[id]}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      
      <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
