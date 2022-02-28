import React from "react";
import styled from "styled-components";

export default function PrevButton({ title, ...rest }) {
  return <StyledButton {...rest}>{title}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  font-weight: 400;
  color: #243153;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  height: 60px;
  width: 200px;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border: solid #243153 2px;
  border-radius: 10px;
  background: white;
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
