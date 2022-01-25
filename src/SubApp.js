import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

export default function SubApp() {
  return (
    <StyledSubApp>
      <Nav />
      <Outlet />
    </StyledSubApp>
  );
}

const StyledSubApp = styled.div`
  display: flex;
`;
