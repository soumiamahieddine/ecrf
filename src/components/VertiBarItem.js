import React from "react";
import styled from "styled-components";

export default function VertiBarItem({ number, label }) {
  return (
    <StyledLi>
      <div className="li-box">
        <span>{number}</span>{" "}
      </div>
      <label htmlFor="li-box">{label}</label>
    </StyledLi>
  );
}

const StyledLi = styled.div`
  display: flex;
  flex-direction: row;
  //  justify-content: center;
  align-items: center;
  color: #6f6f6f;
  gap: 1rem;
  .li-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 43px;
    width: 43px;
    margin-left: 25px;
    background: #939ebe;
    color: white;
    border-radius: 10px;
  }
`;
