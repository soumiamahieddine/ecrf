import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import home from "../img/home.svg";
import listPatients from "../img/listPatients.svg";
import location from "../img/location.svg";
import logout from "../img/logout.svg";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase/firebase.utils";
import Modal from "react-modal";
import logoAlamo from "../img/logoAlamo.svg";

export default function Nav() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = firestore.doc(`admins/${user.uid}`);
        const snapshot = await userRef.get();
        if (snapshot.exists) {
          setAdmin(true);
        }
      }
    });
    return unsubscribe;
  }, []);
  return (
    <StyledNav>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>RegiStar</h1>
      </div>

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            transition: "0.5s ease",
          },
          content: {
            position: "absolute",
            top: "150px",
            left: "400px",
            right: "400px",
            bottom: "150px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "25px",
            border: "solid 2px #243153",
            outline: "none",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            transition: "0.5s ease",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>A propos</h1>
          <img src={logoAlamo} style={{ width: "120px" }}></img>
          <h2 style={{ fontSize: "2rem", margin: "18px" }}>Eurl Alamo</h2>
          <p style={{ fontSize: "1.5rem" }}>
            Adresse : 21 Rue Redha Houhou Sidi M'hamed Alger, Algérie.
          </p>
          <p style={{ fontSize: "1.5rem", marginBottom: "1.8rem" }}>
            Tel : 021734443 / 0797761039
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Copyright © 2022 Eurl Alamo. All rights reserved.
          </p>
        </div>
      </Modal>

      <ul>
        <li>
          {admin ? (
            <button
              onClick={() => {
                navigate("/admindashboard");
              }}
            >
              <i style={{ marginRight: "20px" }} class="fa-solid fa-house"></i>
              <span>Acceuil</span>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <i style={{ marginRight: "20px" }} class="fa-solid fa-house"></i>
              <span>Acceuil</span>
            </button>
          )}
        </li>
        <li>
          {admin ? (
            <button
              onClick={() => {
                navigate("/listmedecins");
              }}
            >
              <i
                style={{ marginRight: "20px" }}
                class="fa-solid fa-list-ul"
              ></i>{" "}
              <span>Liste des medecins</span>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/listPatients");
              }}
            >
              <i
                style={{ marginRight: "20px" }}
                class="fa-solid fa-list-ul"
              ></i>{" "}
              <span>Liste des patients</span>
            </button>
          )}
        </li>
        <li>
          <button onClick={() => setModalIsOpen(true)}>
            <i
              style={{ marginRight: "20px" }}
              class="fa-solid fa-circle-info"
            ></i>
            <span> A propos</span>
          </button>
        </li>

        <li>
          <button
            onClick={async () => {
              await auth.signOut();

              navigate("/", { replace: true });
              window.location.reload(false);
            }}
          >
            <i
              style={{ marginRight: "20px" }}
              class="fa-solid fa-arrow-right-from-bracket"
            ></i>
            <span>Déconnecter</span>
          </button>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  width: 20vw;
  height: 150vh;
  display: flex;
  flex-direction: column;
  // margin: auto;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0rem;
  background: #243153;
  /* position: sticky;
  top: 20;
  z-index: 10; */

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  h1 {
    color: #7481a4;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 10rem;
    width: 100%;
  }

  button {
    display: flex;
    font-weight: 400;
    color: #7481a4;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    height: 5vh;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    width: 100%;
    align-items: center;
    position: relative;
    border: none;
    text-align: start;
    padding-left: 5rem;
    background: transparent;
    transition: all 0.5 ease;
    &:hover {
      background-color: #243153;
      color: white;
    }
    img {
      width: 1rem;
      margin-right: 1rem;
    }
  }
  .logo {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    padding-left: 5rem;
    img {
      height: 5vh;
      margin-right: 0.5rem;
    }
  }
`;
