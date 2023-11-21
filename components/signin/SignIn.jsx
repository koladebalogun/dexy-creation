import { useState } from "react";
import styles from "../../styles/signin.module.scss";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import { signIn } from "next-auth/react";
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

export default function SignIn({ callbackUrl, csrfToken }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(initialvalues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
    login_error,
  } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address."),
    login_password: Yup.string().required("Please enter a password"),
  });

  const signInHandler = async () => {
    setLoading(true);
    let options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };
    const res = await signIn("credentials", options);
    setUser({ ...user, success: "", error: "" });
    setLoading(false);
    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
    } else {
      return Router.push(callbackUrl || "/");
    }
  };

  return (
    <>
      {loading && <DotLoaderSpinner loading={loading} />}

      <div className={styles.login__form}>
        <h1>Sign in</h1>
        <p>Get access to one of the best Eshopping services in the world.</p>
        <Formik
          enableReinitialize
          initialValues={{
            login_email,
            login_password,
          }}
          validationSchema={loginValidation}
          onSubmit={() => {
            signInHandler();
          }}
        >
          {(form) => (
            <Form method="post" action="/api/auth/signin/email">
              <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
              <LoginInput
                type="text"
                name="login_email"
                icon="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <LoginInput
                type="password"
                name="login_password"
                icon="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <CircledIconBtn type="submit" text="Sign in" />
              {login_error && (
                <span className={styles.error}>{login_error}</span>
              )}
              <div className={styles.forgot}>
                <Link href="/auth/forgot">Forgot password ?</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
