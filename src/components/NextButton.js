import React from "react";
import styled from "styled-components";

export default function NextButton({ ...rest }) {
  return (
    <StyledButton type="submit" {...rest}>
      Continuer
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  font-weight: 400;
  color: #7481a4;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 6vh;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  margin: 0rem 5rem;
  width: 20%;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: #243153;
  transition: all 0.5 ease;

  &:hover {
    background-color: #243153;
    color: white;
  }
  img {
    width: 1rem;
    margin-right: 1rem;
  }
`;
