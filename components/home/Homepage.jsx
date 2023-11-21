import { useState, useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Loader from "../loader/Loader";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import style from "../banner/Style.module.css";

export default function Homepage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <div className={style.home}>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              {/* <Loader setLoading={setLoading} /> */}
            </motion.div>
          ) : (
            <div>
              <Banner />
              {!loading && (
                <div className={`${style.transition_image} ${style.final}`}>
                  <motion.img
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1.6,
                    }}
                    src={"/images/image-2.webp"}
                    layoutId="main-image-1"
                  />
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
