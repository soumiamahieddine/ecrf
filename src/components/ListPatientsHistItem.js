import React from "react";
import styled from "styled-components";

export default function ListPatientsHistItem({
  color,
  background,
  nom,
  prenom,
  dateInclusion,
}) {
  const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45px;
    background: ${background};
    color: ${color};
    h3 {
      height: 5vh;
      width: 100%;
      background: transparent;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 500;
      font-size: 1rem;
    }
  `;
  return (
    <StyledItem>
      {{ nom } && <h3>{nom}</h3>}
      {{ dateInclusion } && <h3>{dateInclusion}</h3>}
    </StyledItem>
  );
}
