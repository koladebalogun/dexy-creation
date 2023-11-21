import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { useState } from "react";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  country,
} from "next-auth/react";
import axios from "axios";
import DotLoaderSpinner from "../components/loaders/dotLoader";
import SignIn from "@/components/signin/SignIn";
import SignUp from "@/components/signup/SignUp";


export default function signin({ providers,country }) {
  const [loading, setLoading] = useState(false);


   
  return (
    <>
      <Navbar country={country} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>
          <SignIn />

          <div className={styles.login__socials}>
          <span className={styles.or}>Or continue with</span>
          <div className={styles.login__socials_wrap}>
            {providers.map((provider) => {
              if (provider.name == "Credentials") {
                return;
              }
              return (
                <div key={provider.name}>
                  <button
                    className={styles.social__btn}
                    onClick={() => signIn(provider.id)}
                  >
                    <img src={`../../icons/${provider.name}.png`} alt="" />
                    Sign in with {provider.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <SignUp />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  console.log(query)


  const session = await getSession({ req });
  const { callbackUrl } = query;
  console.log(callbackUrl)

  if (session) {
    return {
      redirect: {
        destination: callbackUrl,
      },
    };
  }

  let data = await axios
    .get("https://api.ipregistry.co/?key=c40mj3hsjkp2ibyx")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });


  const csrfToken = await getCsrfToken(context);
  const providers = Object.values(await getProviders());

  return {
    props: {
      providers,
      csrfToken,
      callbackUrl,
      country: { name: data.name, flag: data.flag.emojitwo, sign: data.code },
    },
  };
}
