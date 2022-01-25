import React from "react";
import styled from "styled-components";

export default function HoribarItem({ number }) {
  return (
    <StyledLi>
      <div className="outerCircle">
        <div className="innerCircle">
          <span>{number}</span>
        </div>
      </div>
    </StyledLi>
  );
}

const StyledLi = styled.div`
  display: flex;
  align-items: center;
  .outerCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    background: white;
    color: white;
    border-radius: 30px;
    .innerCircle {
      height: 36px;
      width: 36px;
      background: #939ebe;
      border-radius: 18px;
      color: #243153;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
