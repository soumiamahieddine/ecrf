import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import home from "../img/home.svg";
import listPatients from "../img/listPatients.svg";
import location from "../img/location.svg";
import logout from "../img/logout.svg";

export default function Nav() {
  return (
    <StyledNav>
      <div className="logo">
        <img src={logo} alt="" />
        <h1>RegiStar</h1>
      </div>
      <ul>
        <li>
          <button>
            <img src={home} alt="" />
            <span>Acceuil</span>
          </button>
        </li>
        <li>
          <button>
            <img src={listPatients} alt="" /> <span>Liste des patients</span>
          </button>
        </li>
        <li>
          <button>
            <img src={location} alt="" />
            <span> Répartition des patients</span>
          </button>
        </li>
        <li>
          <button>
            <img src={logout} alt="" />
            <span>Déconnecter</span>
          </button>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // margin: auto;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0rem;
  background: #243153;
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
    color: #7481a4;
    height: 5vh;
    width: 100%;
    align-items: center;
    position: relative;
    border: none;
    text-align: start;
    padding-left: 5rem;
    &:hover {
      color: #b2bacf;
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
