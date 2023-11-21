import React from "react";
import styles from "../../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginInput from "../inputs/loginInput";
import { useState } from "react";
import CircledIconBtn from "../buttons/circledIconBtn";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  country,
} from "next-auth/react";
import axios from "axios";
import DotLoaderSpinner from "../loaders/dotLoader";
import Router from "next/router";

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
  login_error: "",
};

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialvalues);
  const { name, email, password, conf_password, success, error } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  const signUpHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      setUser({ ...user, error: "", success: data.message });
      setLoading(false);
      setTimeout(async () => {
        let options = {
          redirect: false,
          email: email,
          password: password,
        };
        const res = await signIn("credentials", options);
        Router.push("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setUser({ ...user, success: "", error: error.response.data.message });
    }
  };

  // console.log(user);

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}

      <div className={styles.login__container}>
        <div className={styles.login__form}>
          <h1>Sign up</h1>
          <p>Get access to one of the best Eshopping services in the world.</p>
          <Formik
            enableReinitialize
            initialValues={{
              name,
              email,
              password,
              conf_password,
            }}
            validationSchema={registerValidation}
            onSubmit={() => {
              signUpHandler();
            }}
          >
            {(form) => (
              <Form>
                <LoginInput
                  type="text"
                  name="name"
                  icon="user"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <LoginInput
                  type="text"
                  name="email"
                  icon="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                />
                <LoginInput
                  type="password"
                  name="password"
                  icon="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <LoginInput
                  type="password"
                  name="conf_password"
                  icon="password"
                  placeholder="Re-Type Password"
                  onChange={handleChange}
                />
                <CircledIconBtn type="submit" text="Sign up" />
              </Form>
            )}
          </Formik>
          <div>
            {success && <span className={styles.success}>{success}</span>}
          </div>
          <div>{error && <span className={styles.error}>{error}</span>}</div>
        </div>
      </div>
    </>
  );
}
