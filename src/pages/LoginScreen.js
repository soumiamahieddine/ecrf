import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import logo from "../img/logo.svg";

export default function LoginScreen() {
  return (
    <Page>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Bienvenue</h1>
        </div>
        <div className="form">
          <input type="text" placeholder="utilisateur" />
          <input type="text" placeholder="mot de passe" />
          <button>LOGIN</button>
          <p>
            Veuillez introduire votre nom d'utilisateur et mot de passe qu'on
            vous a fourni, au cas ou vous avez oublié votre mot de passe
            veuillez nous contacter en <a href="#">cliquant ici</a>
          </p>
        </div>
      </div>
    </Page>
  );
}

const Page = styled.div`
  height: 100vh;
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
    input {
      width: 100%;
      height: 2.5rem;
      margin-bottom: 1rem;
      border-radius: 10px;
      border: 3px solid white;
      color: #7481a4;
      font-size: 1rem;
      padding: 0rem 1rem;
    }
    button {
      background: #7481a4;
      width: 100%;
      height: 2.5rem;
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
