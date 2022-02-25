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

  const addNotification = async () => {
    const medecinref = firestore.collection("medecins").doc(param.idmedecin);

    const medecinsnap = medecinref.collection("notifications").add({
      msg: `un admin vous a signalé de revoir le patient "${patient.data.nom}" `,
    });
  };

  const gettingPatient = async () => {
    const unsubscibe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const patientref = firestore
          .collection("medecins")
          .doc(param.idmedecin)
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
          <div className="buttons">
            <NiceButton
              className="button"
              title="Signaler Patient"
              onClick={addNotification}
            />
            {/* <NiceButton
              title="Modifier"
              onClick={() => navigate(`/donneesDemograghiques/${patient.id}`)}
            /> */}
          </div>
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
