import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo192 from "../img/doc.png";
import logo193 from "../img/logo192.png";
import { auth, firestore } from "../firebase/firebase.utils";

export default function NavTop({ name }) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const handleRead = () => {
    notifications.map(async (n) => {
      const unsubscribe2 = await firestore
        .collection("medecins")
        .doc(user.uid)
        .collection("notifications")
        .doc(n.id)
        .delete();

      return unsubscribe2;
    });
    setNotifications([]);
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);

      const unsubscribe2 = firestore
        .collection("medecins")
        .doc(user.uid)
        .collection("notifications")
        .onSnapshot((snap) => {
          setNotifications(
            snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });
      return unsubscribe2;
    });
    return unsubscribe;
  }, []);
  return (
    <NavBar className="nav-bar">
      <div className="notification-icon" onClick={() => setOpen(!open)}>
        <img src={logo193} alt="" />
        {notifications.length > 0 && (
          <div className="counter">{notifications.length} </div>
        )}
      </div>
      <div className="text">{user && <h1>{user.displayName}</h1>}</div>
      <div className="sep"></div>
      <div className="profil-pic">
        <div className="avatar">
          {" "}
          <img src={logo192} alt="" />
        </div>
      </div>
      {open && (
        <div className="notifications-menu">
          {notifications.map((n) => (
            <>
              <div key={n.id} className="notification">
                <img src={logo193} alt="" />
                <p>{n.msg}</p>
              </div>
              <div className="sep-menu"></div>
            </>
          ))}
          <button className="nButton" onClick={handleRead}>
            Supprimer les notifications
          </button>
        </div>
      )}
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
  position: relative;
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
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
  .notification-icon {
    width: 4vh;
    height: 4vh;
    margin: 0rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      height: 3vh;
      width: 3vh;
    }
    .counter {
      position: absolute;
      top: -2px;
      right: -2px;
      background: red;
    }
  }
  .notifications-menu {
    height: 40vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #bac4e0;
    position: absolute;
    border-radius: 15px;
    top: 10vh;
    right: 20vw;
    z-index: 1000;
    .nButton {
      width: 80%;
      padding: 5px;
      margin-top: 10px;
      background: #243153;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .notification {
    width: 100%;
    color: black;
    display: flex;
    align-items: center;
    padding: 1rem;
    &:hover {
      background: #8fa1ce;
      border-radius: 10px;
    }
    img {
      height: 3vh;
      width: 3vh;
    }
  }
  .sep-menu {
    width: 18vw;
    height: 2px;
    margin: 0rem 1rem;
    background: black;
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
      overflow: hidden;
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
