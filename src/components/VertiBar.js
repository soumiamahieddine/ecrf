import React from "react";
import styled from "styled-components";
import liste1 from "../img/liste-prise-intiales-1.png";

export default function VertiBar() {
  return (
    <Bar>
      <img src={liste1} alt="" />
    </Bar>
  );
}

const Bar = styled.div`
  height: 70vh;
  width: 25vw;
  background: transparent;
  margin: 2rem 4rem;
  img {
    height: 70vh;
    width: 25vw;
  }
`;
