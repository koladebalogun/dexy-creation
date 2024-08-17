import { useLayoutEffect } from "react";
import gsap from "gsap";
import style from "./style.module.css"

function Footer() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".footer-wrapper", 2.5, {
        opacity: 0,
        delay: 3,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_button}>
          <div className={style.footer_icon}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <span>Facebook</span>
        </div>
        <div className={style.footer_button}>
          <div className={style.footer_icon}>
            <i className="fab fa-twitter"></i>
          </div>
          <span>Twitter</span>
        </div>

        <a href="https://www.instagram.com/dexy_creation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <div className={style.footer_button}>
            <div className={style.footer_icon}>
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
