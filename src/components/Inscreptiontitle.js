import React from "react";
import styled from "styled-components";

export default function Inscreptiontitle({ title }) {
  return (
    <Title>
      <h1>{title}</h1>
      <div className="sep"></div>
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 8vh;
  width: 79vw;
  background: transparent;
  position: relative;
  h1 {
    color: #243153;
    font-size: 1.3rem;
    margin: 0rem 3rem;
  }
  .sep {
    height: 1px;
    width: 79vw;
    background: #7481a4;
    position: absolute;
    bottom: 0;
  }
`;
