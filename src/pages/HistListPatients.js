import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";

import ListPatientsHistItem from "../components/ListPatientsHistItem";
import { auth, firestore } from "../firebase/firebase.utils";

export default function HistListPatients() {
  const [list, setList] = useState(null);
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
      <div className="list-container">
        <div className="list">
          <ListPatientsHistItem
            nom="Nom"
            dateInclusion="Date d'inclusions"
            color="white"
            background="#243153"
          />
          {list && (
            <div>
              {list.map((patient, index) => {
                return (
                  <div key={patient.id}>
                    {index % 2 === 0 ? (
                      <ListPatientsHistItem
                        key={patient.id}
                        nom={patient.data.nom}
                        dateInclusion={patient.data.createdAt}
                        color="#243153"
                        background="white"
                      />
                    ) : (
                      <ListPatientsHistItem
                        key={patient.id}
                        nom={patient.data.nom}
                        dateInclusion={patient.data.createdAt}
                        color="#243153"
                        background="#cdd7f3"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}
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
    width: 100%;

    .list {
      border-radius: 10px;
      width: 100%;
    }
  }
`;
