import React from "react";
import styled from "styled-components";
import prise from "../img/prise-de-donnés-initiales.png";

export default function Horibar() {
  return (
    <Bar>
      <img src={prise} alt="" />
    </Bar>
  );
}

const Bar = styled.div`
  height: 12vh;
  width: 80vw;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 12vh;
    width: 67vw;
  }
`;
