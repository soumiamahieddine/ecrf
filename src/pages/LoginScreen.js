import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/FormikControl";
import logo from "../img/logo.svg";
import { auth, firestore } from "../firebase/firebase.utils";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function LoginScreen() {
  const navigate = useNavigate();
  const checkUser = async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = firestore.doc(`admins/${user.uid}`);
        const snapshot = await userRef.get();
        if (snapshot.exists) {
          navigate("/admindashboard", { replace: true });
        } else {
          navigate("/dashboard");
        }
      }
    });
    return unsubscribe;
  };
  useEffect(() => {
    checkUser();
  }, []);
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
      .catch((e) => alert(e.message));
  };

  const emailSent = () => {
    toast.success(
      `Un email de réinitialisation du mot de passe vous a été envoyé.\nVérifier votre email.`
    );
  };
  const emailTip = () => {
    toast.warning(
      `Si vous ne trouvez pas l'email, cherchez dans la section "Spam".`
    );
  };

  const errorSending = (e) => {
    toast.error(e);
  };

  const resetPassword = async (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        emailSent();
        emailTip();
      })
      .catch((e) => {
        errorSending(e.message);
      });
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
                className="inputt"
                control="input"
                type="email"
                name="email"
                placeholder="email"
                width="350px"
              />
              <FormikControl
                className="inputt"
                control="input"
                type="password"
                name="password"
                placeholder="password"
                width="350px"
              />

              <button className="myButton" type="submit">
                LOGIN
              </button>
              <p>
                Veuillez introduire votre nom d'utilisateur et mot de passe
                qu'on vous a fourni, au cas ou vous avez oublié votre mot de
                passe veuillez nous contacter en{" "}
                <button
                  className="atag"
                  onClick={function () {
                    resetPassword(formik.values.email);
                  }}
                >
                  cliquant ici
                </button>
                <ToastContainer />
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
    width: 500px;
    height: 550px;
    border-radius: 25px;
  }
  .inputt {
    margin-left: 15px;
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
    .myButton {
      background: #7481a4;
      width: 300px;
      height: 40px;
      border: 3px solid #7481a4;
      border-radius: 10px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
    }
    .atag {
      background: none !important;
      border: none;
      padding: 0 !important;
      /*optional*/
      font-family: arial, sans-serif;
      /*input has OS specific font-family*/
      color: white;
      text-decoration: underline;
      cursor: pointer;
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
