import React from "react";
import styled from "styled-components";

export default function ListMedecinItem({
  color,
  background,
  nom,
  sexe,
  residence,
  email,
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
      <div className="nom">
        <h3>{nom}</h3>
      </div>
      <div className="sexe">
        <h3>{sexe} </h3>
      </div>
      <div className="residence">
        <h3>{residence}</h3>
      </div>
      <div className="email">
        <h3>{email}</h3>
      </div>
    </StyledItem>
  );
}
