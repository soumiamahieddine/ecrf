import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavTop from "../components/NavTop";
import Title from "../components/Inscreptiontitle";
import ListPatientsItem from "../components/ListPatientsItem";
import { auth, firestore } from "../firebase/firebase.utils";

export default function ListPatients() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const unsubscribe2 = firestore
          .collection("medecins")
          .doc(user.uid)
          .collection("patients")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setList(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
        return unsubscribe2;
      }
    });
  }, []);
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Listes des Patients" />
      <div className="list-container">
        <div className="list">
          <ListPatientsItem
            age="Age"
            nom="Nom"
            sexe="Sexe"
            residence="Residence"
            niveau="Niveau socio-économique"
            dateInclusion="Date d'inclusions"
            color="white"
            background="#243153"
          />
          {list.map((patient, index) => {
            return (
              <div key={patient.id}>
                {index % 2 === 0 ? (
                  <ListPatientsItem
                    key={patient.id}
                    age={patient.data.age}
                    nom={patient.data.nom}
                    sexe={patient.data.sexe}
                    residence={patient.data.residence}
                    niveau={patient.data.niveau}
                    dateInclusion={patient.data.createdAt}
                    onClick={() => navigate(`/patientinfo/${patient.id}`)}
                    color="#243153"
                    background="white"
                  />
                ) : (
                  <ListPatientsItem
                    key={patient.id}
                    age={patient.data.age}
                    nom={patient.data.nom}
                    pathologie={patient.data.pathologieVasculaire}
                    sf={patient.data.strategieFrequence1}
                    traitement={patient.data.traitementOption1}
                    dateInclusion={patient.data.createdAt}
                    onClick={() => navigate(`/patientinfo/${patient.id}`)}
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
