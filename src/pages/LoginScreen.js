import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import logo from "../img/logo.svg";
import { auth } from "../firebase/firebase.utils";
import { useEffect } from "react";

export default function LoginScreen() {
  const navigate = useNavigate();
  const checkUser = async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return unsubscribe;
  };
  useEffect(() => {
    checkUser();
  }, [checkUser]);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(navigate("/dashboard"))
      .catch((e) => alert(e.message));
  };
  return (
    <Page>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Bienvenue</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form className="form">
              <FormikControl
                control="input"
                type="email"
                name="email"
                placeholder="email"
                width="350px"
              />
              <FormikControl
                control="input"
                type="password"
                name="password"
                placeholder="password"
                width="350px"
              />

              <button type="submit">LOGIN</button>
              <p>
                Veuillez introduire votre nom d'utilisateur et mot de passe
                qu'on vous a fourni, au cas ou vous avez oublié votre mot de
                passe veuillez nous contacter en{" "}
                <Link to="/motDePasseOublier">cliquant ici</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7481a4;
  .container {
    background: #243153;
    padding: 3rem;
    width: 27vw;
    height: 60vh;
    border-radius: 25px;
  }
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 7rem;
    }
    h1 {
      color: white;
      font-weight: 500;
    }
  }
  .form {
    height: 40vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    button {
      background: #7481a4;
      width: 100%;
      height: 40px;
      border: 3px solid #7481a4;
      border-radius: 10px;
      color: white;
      font-size: 1rem;
    }
    p {
      color: #7481a4;
      font-size: 0.8rem;
      margin: 1rem 3rem;
      text-align: center;
      a {
        color: white;
      }
    }
  }
`;
