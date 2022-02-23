import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import statLogo from "../img/PatientStat.svg";
import { auth, firestore } from "../firebase/firebase.utils";

export default function PageTitle({ title, isStat }) {
  const [countTotal, setCountTotal] = useState();
  const [countToday, setCountToday] = useState();

  let startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  let endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const unsubscribe2 = firestore
          .collection("medecins")
          .doc(user.uid)
          .collection("patients")
          .get()
          .then((snap) => {
            console.log(snap.size);
            setCountTotal(snap.size);
          });

        return unsubscribe2;
      }
    });
  }, []);

  useLayoutEffect(() => {
    const unsubscribee = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const unsubscribe22 = firestore
          .collection("medecins")
          .doc(user.uid)
          .collection("patients")
          .where("timestamp", ">=", startOfDay)
          .get()
          .then((snap) => {
            console.log(snap.size);
            setCountToday(snap.size);
          });

        return unsubscribe22;
      }
    });
  }, []);
  return (
    <Title>
      <h1>{title}</h1>
      {isStat && (
        <div className="stat">
          <img src={statLogo} />
          <p>
            Nombre total <br /> de patients {countTotal}
          </p>
          <img src={statLogo} />
          <p>
            + {countToday} patients <br /> ajoutés aujourd'hui
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
