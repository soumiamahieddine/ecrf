import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo192 from "../img/logo192.png";
import { auth } from "../firebase/firebase.utils";

export default function NavTop({ name }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    console.log(user);
    return unsubscribe;
  }, []);
  return (
    <NavBar className="nav-bar">
      <div className="text">{user && <h1>{user.email}</h1>}</div>
      <div className="sep"></div>
      <div className="profil-pic">
        <div className="avatar">
          {" "}
          <img src={logo192} alt="" />
        </div>
      </div>
    </NavBar>
  );
}

const NavBar = styled.div`
  height: 10vh;
  width: 80vw;
  background: #7481a4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  .sep {
    width: 2px;
    height: 5vh;
    background: #243153;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 10vw;
    height: 10vh;
    margin-right: 2rem;
    h1 {
      color: #243153;
      font-size: 1rem;
      text-decoration: none;
    }
  }
  .profil-pic {
    display: flex;
    background: transparent;
    width: 10vh;
    height: 10vh;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    .avatar {
      height: 6vh;
      width: 6vh;
      border-radius: 3vh;
      border: 2px solid #243153;
      background: transparent;
      img {
        height: 6vh;
        width: 6vh;
        transform: translate(-2px, -2px);
      }
    }
  }
`;
