import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo192 from "../img/doc.png";
import Bell from "../img/Bell.svg";
import Warning from "../img/warning.svg";
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
        <img src={Bell} alt="" />
        {notifications.length > 0 && (
          <div className="counter-container">
            <div className="counter">{notifications.length}</div>{" "}
          </div>
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
          <button className="nButton" onClick={handleRead}>
            Supprimer les notifications
          </button>
          <div className="notifictions-content">
            {notifications.map((n) => (
              <>
                <div key={n.id} className="notification">
                  <img src={Warning} alt="" />
                  <p>{n.msg}</p>
                </div>
                <div className="sep-menu"></div>
              </>
            ))}
          </div>
        </div>
      )}
    </NavBar>
  );
}

const NavBar = styled.div`
  height: 10vh;
  width: 81vw;
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
      cursor: pointer;
    }
    .counter-container {
      position: absolute;
      top: -8px;
      right: -3px;
      background: #eb4444;
      width: 22px;
      height: 22px;
      border-radius: 15px;
    }
    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      cursor: default;
    }
  }
  .notifictions-content {
    overflow-y: auto;
  }
  .notifications-menu {
    height: 40vh;
    width: 20vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    position: absolute;
    border-radius: 15px;
    top: 7vh;
    right: 20vw;
    z-index: 1000;
    border: 2px solid #243153;
    margin-bottom: 5px;
    .nButton {
      width: 90%;
      padding: 10px;
      margin-top: 10px;
      background: #243153;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
  .notification {
    color: black;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 8px;
    cursor: default;
    &:hover {
      background: #bdc7e4;
      border-radius: 10px;
      transition: 300ms ease;
    }
    img {
      height: 3vh;
      width: 3vh;
    }
  }
  .sep-menu {
    width: 18vw;
    height: 2px;
    //margin: 0rem 1rem;
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
