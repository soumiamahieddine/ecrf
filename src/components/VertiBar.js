import React from "react";
import styled from "styled-components";
import VertiBarItem from "./VertiBarItem";

export default function VertiBar({ number }) {
  const Bar = styled.div`
    height: 70vh;
    width: 25vw;
    background: transparent;
    margin: 2rem 4rem;
    .list {
      height: 70vh;
      width: 25vw;
      ul {
        list-style-type: none;
      }
      #liste li:nth-child(${number}) {
        .li-box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 43px;
          width: 43px;
          margin-left: 25px;
          background: #243153;
          color: white;
          border-radius: 10px;
        }
      }
      .sep {
        width: 3px;
        height: 39px;
        background: #939ebe;
        margin-left: 44.5px;
      }
    }
    img {
      height: 70vh;
      width: 25vw;
    }
  `;

  return (
    <Bar>
      <div className="list">
        <ul id="liste">
          <li>
            <VertiBarItem number="1" label="Données démographiques" />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem
              number="2"
              label="Facteurs de risque cardio vasculaire"
            />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem number="3" label="Pathologies associées" />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem number="4" label="Comorbidité" />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem number="5" label="Traitement antérieur de la FA" />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem number="6" label="Motif d’admission/consultation" />
            <div className="sep"></div>
          </li>
          <li>
            <VertiBarItem number="7" label="Symptômes à l'inclusion" />
          </li>
        </ul>
      </div>
    </Bar>
  );
}
