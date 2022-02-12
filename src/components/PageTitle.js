import React from "react";
import styled from "styled-components";
import statLogo from "../img/PatientStat.svg";

export default function PageTitle({ title, isStat }) {
  const nombre = 0;
  return (
    <Title>
      <h1>{title}</h1>
      {isStat === "true" && (
        <div className="stat">
          <img src={statLogo} />
          <p>
            Nombre total <br /> de patients {nombre}
          </p>
          <img src={statLogo} />
          <p>
            + {nombre} patiens <br /> ajoutés aujourd'hui
          </p>
        </div>
      )}
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3rem;
  height: 80px;
  width: 80vw;
  background: transparent;
  border-bottom: 1px solid #7481a4;

  h1 {
    color: #243153;
    font-size: 1.3rem;
  }
  .stat {
    display: flex;
    flex-direction: row;
  }
  img {
    margin-right: 1rem;
  }
  p {
    margin-right: 1rem;
  }
`;
