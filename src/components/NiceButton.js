import React from "react";
import styled from "styled-components";

export default function NiceButton({ title, ...rest }) {
  return (
    <StyledButton type="submit" {...rest}>
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  font-weight: 400;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 60px;
  width: 200px;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: #243153;
  transition: all 0.5 ease;
  cursor: pointer;

  &:hover {
    background-color: #7481a4;
    color: white;
    transition: ease 0.3s;
  }
  img {
    width: 1rem;
    margin-right: 1rem;
  }
`;
