import styles from "./Style.module.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import PhotoCarousel from "./PhotoCarousel";
import { connectDb } from "@/utils/db";
import axios from "axios"
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export default function Photoshoots({country}) {
  const tl = gsap.timeline();
  const loader_logo = useRef();
  const loader_image1 = useRef();
  const loader_image2 = useRef();
  const loader_image3 = useRef();
  const loader_image4 = useRef();
  const loading_bar = useRef();
  const loader = useRef();
  const main_text = useRef();
  const para_text = useRef();
  const scroll = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".loader_logo div", {
        delay: 1,
        y: "100%",
      })
        .to(
          [
            loader_image1.current,
            loader_image2.current,
            loader_image3.current,
            loader_image4.current,
          ],
          {
            delay:.3,
            scale: 1,
            opacity: 1,
            stagger: {
              amount: 1.5,
            },
          }
        )
        .from(
          loading_bar.current,
          {
            width: 0,
          },
          "-=50%"
        )
        .to(
          [
            loader_image1.current,
            loader_image2.current,
            loader_image3.current,
            loader_image4.current,
          ],
          {
            delay: 0.5,
            y: "100vh",
            rotate: "30deg",
            stagger: {
              amount: 0.4,
            },
          }
        )
        .to(
          [
            loader_image1.current,
            loader_image2.current,
            loader_image3.current,
            loader_image4.current,
          ],
          {
            opacity: 0,
            display: "none",
          }
        )
        .to(
          loading_bar,
          {
            width: 0,
          },
          "-=80%"
        )
        .to(loader.current, {
          opacity: 0,
        })

        .from(
          main_text.current,
          {
            y: -50,
            duration: 1,
            opacity: 0,
            stagger: {
              amount: 0.4,
            },
          },
          "<"
        )
        .from(
          para_text.current,
          {
            y: -50,
            duration: 1,
            opacity: 0,
            stagger: {
              amount: 0.4,
            },
          },
          "<"
        )
        .from(scroll.current, {
          delay: 1,
          height: 0,
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar country={country} />
      <div className={styles.photo_wrapper}>
        <div className={styles.photo_loader}>
          <div className={styles.loader_images}>
            <img
              src="/images/image1.webp"
              alt=""
              className={`${styles.loader_image} ${styles.img_hr} ${styles.img1}`}
              ref={loader_image1}
            />
            <img
              src="/images/p-2.webp"
              alt=""
              className={`${styles.loader_image} ${styles.img_vr} ${styles.img2}`}
              ref={loader_image2}
            />
            <img
              src="/images/p-3.webp"
              alt=""
              className={`${styles.loader_image} ${styles.img_hr} ${styles.img3}`}
              ref={loader_image3}
            />
            <img
              src="/images/p-4.webp"
              alt=""
              className={`${styles.loader_image} ${styles.img_vr} ${styles.img4}`}
              ref={loader_image4}
            />
          </div>
          <div className={styles.loading_bar} ref={loading_bar}></div>
        </div>

        <div className={styles.photo_container}>
          <div className={styles.main_text} ref={main_text}>
            <span>
              <h1 className={styles.main_text_heading}>KELIKUME'S STUDIO</h1>
            </span>
          </div>
          <div className={styles.para_text} ref={para_text}>
            <span>
              <p className={styles.text_p}>
                We don't just showcase fashion; we capture it. Our professional
                photoshoots turn your style dreams into stunning visuals.
              </p>
            </span>
            <span>
              <p className={styles.text_p}>
                Explore, indulge, and let your style shine through.
              </p>
            </span>
          </div>
          <div className={styles.scroll_down}>
            <div className={styles.scroll_down_bar} ref={scroll}></div>
          </div>
        </div>

        <PhotoCarousel />
      </div>
      <Footer />
    </>
  );
}


export async function getServerSideProps() {
  connectDb();

  
  let data = await axios
    .get("https://api.ipregistry.co/?key=c40mj3hsjkp2ibyx")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },
    },
  };
}
