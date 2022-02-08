import React from "react";
import styled from "styled-components";

import NavTop from "../components/NavTop";
import Title from "../components/Inscreptiontitle";
import ListPatientsItem from "../components/ListPatientsItem";

export default function ListPatients() {
  const patients = [
    {
      nom: "dris",
      prenom: "massi",
      pathologie: "Fa",
      sf: "1",
      traitement: "Traitement1",
      dateInclusion: "12/12/2012",
      age: "27",
    },
    {
      nom: "khoudi",
      prenom: "anis",
      pathologie: "Fa",
      sf: "1",
      traitement: "Traitement1",
      dateInclusion: "12/12/2012",
      age: "27",
    },
    {
      nom: "mehieddine",
      prenom: "nassim",
      pathologie: "Fa",
      sf: "1",
      traitement: "Traitement1",
      dateInclusion: "12/12/2012",
      age: "27",
    },
    {
      nom: "alloun",
      prenom: "soumia",
      pathologie: "Fa",
      sf: "1",
      traitement: "Traitement1",
      dateInclusion: "12/12/2012",
      age: "27",
    },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Listes des Patients" />
      <div className="list-container">
        <div className="list">
          <ListPatientsItem
            age="Age"
            nom="Nom"
            prenom="Prenom"
            pathologie="Pathologie"
            sf="SF"
            traitement="Traitement"
            dateInclusion="Date d'inclusions"
            color="white"
            background="#243153"
          />
          {patients.map((patient, index) => {
            return (
              <div>
                {index % 2 === 0 ? (
                  <ListPatientsItem
                    key={index}
                    age={patient.age}
                    nom={patient.nom}
                    prenom={patient.prenom}
                    pathologie={patient.pathologie}
                    sf={patient.sf}
                    traitement={patient.traitement}
                    dateInclusion={patient.dateInclusion}
                    color="#243153"
                    background="white"
                  />
                ) : (
                  <ListPatientsItem
                    key={index}
                    age={patient.age}
                    nom={patient.nom}
                    prenom={patient.prenom}
                    pathologie={patient.pathologie}
                    sf={patient.sf}
                    traitement={patient.traitement}
                    dateInclusion={patient.dateInclusion}
                    color="#243153"
                    background="#cdd7f3"
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
