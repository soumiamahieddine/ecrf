import React from "react";
import styled from "styled-components";

export default function ListPatientsItem({
  color,
  background,
  nom,
  sexe,
  residence,
  niveau,
  age,
  dateInclusion,
  onClick,
  width = "70vw",
}) {
  const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    width: ${width};
    height: 5vh;
    background: ${background};
    color: ${color};
    cursor: pointer;
    div {
      height: 5vh;
      width: 11vw;
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
    <StyledItem onClick={onClick}>
      {nom && (
        <div className="nom">
          <h3>{nom}</h3>
        </div>
      )}
      {sexe && (
        <div className="sexe">
          <h3>{sexe} </h3>
        </div>
      )}
      {residence && (
        <div className="residence">
          <h3>{residence}</h3>
        </div>
      )}
      {niveau && (
        <div className="niveau">
          <h3>{niveau}</h3>
        </div>
      )}
      {age && (
        <div className="age">
          <h3>{age}</h3>
        </div>
      )}
      {dateInclusion && (
        <div className="date-inclusion">
          <h3>{dateInclusion}</h3>
        </div>
      )}
    </StyledItem>
  );
}
