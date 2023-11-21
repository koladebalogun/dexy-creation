import styles from "./Style.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import images from "./images/images";



export default function PhotoCarousel() {
  console.log(images);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className={styles.carousel_container}>
        <motion.div className={styles.carousel} ref={carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.inner_carousel}
          >
            {images.map((image) => (
              <motion.div className={styles.carousel_items}>
                <img src={image} alt="" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
