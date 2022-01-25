import React from "react";
import styled from "styled-components";

export default function ListPatientsItem({
  color,
  background,
  nom,
  prenom,
  pathologie,
  sf,
  traitement,
  age,
  dateInclusion,
}) {
  const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 70vw;
    height: 5vh;
    background: ${background};
    color: ${color};
    div {
      height: 5vh;
      width: 10vw;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-weight: 600;
        font-size: 1rem;
      }
    }
  `;
  return (
    <StyledItem>
      <div className="nom">
        <h3>{nom}</h3>
      </div>
      <div className="prenom">
        <h3>{prenom}</h3>
      </div>
      <div className="pathologie">
        <h3>{pathologie} </h3>
      </div>
      <div className="sf">
        <h3>{sf}</h3>
      </div>
      <div className="traitement">
        <h3>{traitement}</h3>
      </div>
      <div className="age">
        <h3>{age}</h3>
      </div>
      <div className="date-inclusion">
        <h3>{dateInclusion}</h3>
      </div>
    </StyledItem>
  );
}
