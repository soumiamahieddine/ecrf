import React, { useEffect, useState } from "react";
import NavTop from "../components/NavTop";
import Title from "../components/PageTitle";
import ProfilePatient from "../components/ProfilePatient";
import styled from "styled-components";
import { auth, firestore } from "../firebase/firebase.utils";
import { useParams, useNavigate } from "react-router-dom";
import NiceButton from "../components/NiceButton";
import { Formik, Form } from "formik";
import FormikControl from "../components/FormikControl";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PatientInfos() {
  const [patient, setPatient] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const param = useParams();
  const navigate = useNavigate();

  const initialValues = { motif: "" };
  const validationSchema = Yup.object({
    motif: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
  });

  const notify = () => {
    toast.success(`Patient a été signalé`);
  };

  const addNotification = async (motif) => {
    console.log(motif);
    const medecinref = firestore.collection("medecins").doc(param.idmedecin);
    const medecinsnap = await medecinref.collection("notifications").add({
      msg: `un admin vous a signalé de revoir le patient "${patient.data.nom}" - message : ${motif["motif"]}  `,
    });
    setDisabled(true);

    return medecinref;
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
    window.scrollTo(0, 0);
  }, []);

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={addNotification}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control="textarea"
                    type="text"
                    name="motif"
                    label="Message"
                    placeholder="Précisez quel champs à signaler"
                    width="600px"
                    height="200px"
                  />
                  <NiceButton
                    className="button"
                    title="Signaler Patient"
                    onClick={notify}
                    disabled={formik.isSubmitting}
                  />
                  <ToastContainer />
                </Form>
              )}
            </Formik>

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
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
