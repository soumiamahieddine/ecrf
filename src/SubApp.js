import React from "react";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase.utils";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

export default function SubApp() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <StyledSubApp>
      <Nav currentUser={currentUser} />
      <Outlet />
    </StyledSubApp>
  );
}

const StyledSubApp = styled.div`
  display: flex;
`;
