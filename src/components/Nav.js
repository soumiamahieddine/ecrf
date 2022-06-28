import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import home from "../img/home.svg";
import listPatients from "../img/listPatients.svg";
import location from "../img/location.svg";
import logout from "../img/logout.svg";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase/firebase.utils";

export default function Nav() {
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
          <button>
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
  height: 200vh;
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
