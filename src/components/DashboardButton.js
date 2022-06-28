import React from "react";
import styled from "styled-components";

export default function DashboardButton({ imgName, name, ...rest }) {
  return (
    <StyledButton {...rest}>
      <i class={imgName}></i>
      {name}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  font-weight: 400;
  color: #243153;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  cursor: pointer;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  margin: 0 0 1rem 0;
  justify-content: center;
  align-items: center;
  border: solid #243153 2px;
  border-radius: 15px;
  background: white;
  transition: all 0.2s ease;
  width: 350px;

  &:hover {
    background: #243153;
    color: white;
  }

  i {
    font-size: 1.6rem;
    margin-right: 2rem;
    width: 1.5rem;
  }
`;
