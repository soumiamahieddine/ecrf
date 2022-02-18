import React from "react";
import styled from "styled-components";

import NavTop from "../../components/NavTop";
import Title from "../../components/Inscreptiontitle";
import ListMedecinItem from "../../components/ListPatientsItem";

export default function ListMedecins() {
  const patients = [
    {
      nom: "dris",
      prenom: "massi",
      email: "Fa",
      wilaya: "1",
    },
    {
      nom: "khoudi",
      prenom: "anis",
      email: "Fa",
      wilaya: "1",
    },
    {
      nom: "mehieddine",
      prenom: "nassim",
      email: "Fa",
      wilaya: "1",
    },
    {
      nom: "alloun",
      prenom: "soumia",
      email: "Fa",
      wilaya: "1",
    },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Listes des Patients" />
      <div className="list-container">
        <div className="list">
          <ListMedecinItem
            nom="Nom"
            prenom="Prenom"
            email="email"
            wilaya="wilaya"
            color="white"
            background="#243153"
            width="40vw"
          />
          {patients.map((patient, index) => {
            return (
              <div key={index}>
                {index % 2 === 0 ? (
                  <ListMedecinItem
                    key={index}
                    nom={patient.nom}
                    prenom={patient.prenom}
                    email={patient.email}
                    wilaya={patient.wilaya}
                    color="#243153"
                    background="white"
                    width="40vw"
                  />
                ) : (
                  <ListMedecinItem
                    key={index}
                    nom={patient.nom}
                    prenom={patient.prenom}
                    email={patient.email}
                    wilaya={patient.wilaya}
                    color="#243153"
                    background="#cdd7f3"
                    width="40vw"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    .list {
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;
