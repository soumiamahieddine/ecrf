import React, { useEffect, useState } from "react";
import NavTop from "../components/NavTop";
import Title from "../components/PageTitle";
import ProfilePatient from "../components/ProfilePatient";
import styled from "styled-components";
import { auth, firestore } from "../firebase/firebase.utils";
import { useParams, useNavigate } from "react-router-dom";
import NiceButton from "../components/NiceButton";

export default function PatientInfos() {
  const [patient, setPatient] = useState(null);

  const param = useParams();
  const navigate = useNavigate();
  const gettingPatient = async () => {
    const unsubscibe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const patientref = firestore
          .collection("medecins")
          .doc(user.uid)
          .collection("patients")
          .doc(param.idpatient);
        const patientsnap = await patientref.get();
        setPatient({
          id: patientsnap.id,
          data: patientsnap.data(),
        });
        return patientref;
      }
    });
    return unsubscibe;
  };
  useEffect(() => {
    gettingPatient();
  }, []);
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Profile patient" isStat="false" />
      {patient && (
        <>
          <ProfilePatient data={patient} className="patientInfos" />

          {!patient.data.suivi3 && (
            <NiceButton
              title="ajouter le suivi des 3 mois"
              style={{ width: "400px" }}
              onClick={() => navigate(`/suivi3/${patient.id}`)}
            />
          )}
          {patient.data.suivi3 && !patient.data.suivi6 && (
            <NiceButton
              title="ajouter le suivi des 6 mois"
              style={{ width: "400px" }}
              onClick={() => navigate(`/suivi6/${patient.id}`)}
            />
          )}
          {patient.data.suivi3 &&
            patient.data.suivi6 &&
            !patient.data.suivi12 && (
              <NiceButton
                title="ajouter le suivi des 12 mois"
                style={{ width: "400px" }}
                onClick={() => navigate(`/suivi12/${patient.id}`)}
              />
            )}
          <NiceButton
            title="Modifier"
            onClick={() => navigate(`/donneesDemograghiques/${patient.id}`)}
          />
        </>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
