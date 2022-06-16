import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavTop from "../components/NavTop";
import Title from "../components/Inscreptiontitle";
import ListMedecinItem from "../components/ListMedecinItem";
import { auth, firestore } from "../firebase/firebase.utils";

export default function ListMedecins() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const unsubscribe2 = firestore
          .collection("medecins")
          .onSnapshot((snapshot) =>
            setList(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
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
          <ListMedecinItem
            nom="Nom"
            email="email"
            sexe="sexe"
            secteur="secteur"
            residence="résidence"
            color="white"
            background="#243153"
            width="50vw"
          />
          {list.map((patient, index) => {
            return (
              <div key={index}>
                {index % 2 === 0 ? (
                  <ListMedecinItem
                    key={index}
                    nom={patient.nom}
                    email={patient.email}
                    residence={patient.residence}
                    sexe={patient.sexe}
                    secteur={patient.secteur}
                    onClick={() => navigate(`/listPatientsAdmin/${patient.id}`)}
                    color="#243153"
                    background="white"
                    width="50vw"
                  />
                ) : (
                  <ListMedecinItem
                    key={index}
                    nom={patient.nom}
                    email={patient.email}
                    residence={patient.residence}
                    sexe={patient.sexe}
                    secteur={patient.secteur} 
                    onClick={() => navigate(`/listPatientsAdmin/${patient.id}`)}
                    color="#243153"
                    background="#cdd7f3"
                    width="50vw"
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
