import React from "react";
import styled from "styled-components";
import prise from "../img/prise-de-donnés-initiales.png";
import HoriBarItem from "./HoribarItem";

export default function Horibar({ number }) {
  const Bar = styled.div`
    height: 12vh;
    width: 80vw;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    .list {
      height: 12vh;
      width: 80vw;
      #liste li:nth-child(${number}) {
        .outerCircle {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          width: 60px;
          background: #243153;
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
      }
      ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-content: center;
        align-items: center;
        li {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
      }
      .sep {
        width: 231px;
        height: 3px;
        background: #939ebe;
      }
    }
  `;

  return (
    <Bar>
      <div className="list">
        <ul id="liste">
          <li>
            <HoriBarItem number="1" />
            <div className="sep"></div>
          </li>
          <li>
            <HoriBarItem number="2" />
            <div className="sep"></div>
          </li>
          <li>
            <HoriBarItem number="3" />
          </li>
        </ul>
      </div>
    </Bar>
  );
}
