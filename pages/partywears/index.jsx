import styles from "./Style.module.css";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import images from "../../components/images/partywears";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { connectDb } from "@/utils/db";
import axios from "axios"
import MobilePartyWears from "@/components/mobile/MobilePartyWears";

export default function PartyWears({ country }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    const imgspan = document.getElementById("left-side-img-span");
    imgspan.innerHTML = ""; // Clear previous images
    const img = new Image();
    img.src = images[currentImageIndex];
    imgRef.current = img;
    imgspan.appendChild(imgRef.current);
    gsap.from(imgRef.current, {
      y: 500,
      opacity: 0,
      duration: 2,
      // transform: "scale(1,0.8)",
      ease: "Power3.easeOut",
    });
  }, [currentImageIndex]);

  function finalAnimation(id, text) {
    setCurrentImageIndex(parseInt(id.slice(-1)) - 1);
    const innerTextContent = document.getElementById("innerTextContent");
    innerTextContent.innerText = text;
  }

  function contentChange(index) {
    const id = `img${index + 1}`;
    finalAnimation(id, getLabelText(index));
  }

  function getLabelText(index) {
    switch (index) {
      case 0:
        return "Bold.";
      case 1:
        return "Spicy.";
      case 2:
        return "Radiant.";
      case 3:
        return "Glamorous.";
      case 4:
        return "Opulent.";
      default:
        return "";
    }
  }

  return (
    <>
      <Navbar country={country} />
      <div className={styles.party_container}>
        <div className={styles.partywears_header}>
          <p>Catalogue</p>
          <div className={styles.logo}>
            <span>PARTY</span>&nbsp;&nbsp;
            <span>WEARS</span>
          </div>
          <p>HOVER ON THE IMAGES</p>
        </div>

        <section className={styles.section}>
          <div className={styles.party_wrapper}>
            <div className={styles.section_container}>
              <div className={styles.left_side_container}>
                <span id="left-side-img-span"></span>
              </div>

              <div className={styles.right_side_container}>
                <span>
                  <h6 id="innerTextContent">Breathtaking.</h6>
                </span>
                <ul>
                  {images.map((src, index) => (
                    <li key={index}>
                      <span>
                        <img
                          src={src}
                          alt=""
                          className="imgHover"
                          id={`img${index + 1}`}
                          onMouseOver={() => contentChange(index)}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MobilePartyWears />
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
