import React from "react";
import styled from "styled-components";

export default function Inscreptiontitle() {
  return (
    <Title>
      <h1>inscription d'un patient</h1>
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 3rem;
  height: 8vh;
  width: 80vw;
  background: transparent;
  h1 {
    color: #243153;
    font-size: 1.3rem;
  }
`;
