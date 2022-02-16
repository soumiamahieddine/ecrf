import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormikControl";
import { useNavigate, useParams } from "react-router-dom";
import {
  auth,
  addingInformationsPatient,
  firestore,
} from "../../../firebase/firebase.utils";

import NavTop from "../../../components/NavTop";
import Title from "../../../components/Inscreptiontitle";
import Horibar from "../../../components/Horibar";
import VertiBar from "../../../components/VertiBar";
import NextButton from "../../../components/NextButton";

export default function MotifDAdmission() {
  const navigate = useNavigate();
  const initialValues = {
    circonstance1: [],
    circonstance2: [],
    episodeFA: [],
    episodeFADate: "",
    typeFA: "",
  };
  const validationSchema = Yup.object({
    circonstance1: Yup.array().required("ce champs est obligatoire"),
    circonstance2: Yup.array().required("ce champs est obligatoire"),
    episodeFA: Yup.array().required("ce champs est obligatoire"),
    episodeFADate: Yup.string("ce champs doit être alpahnumiérique"),
    typeFA: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
  });
  const [feildValues, setFeildValues] = useState(null);
  const gettingPatient = async () => {
    const unsubscibe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const patientref = firestore
          .collection("medecins")
          .doc(user.uid)
          .collection("patients")
          .doc(param.idpatient);
        const patientsnap = await patientref.get();
        setFeildValues({
          id: patientsnap.id,
          ...patientsnap.data(),
        });
        return patientref;
      }
    });
    return unsubscibe;
  };

  useEffect(() => {
    gettingPatient();
  }, []);
  const param = useParams();
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/symptomesALinclusion/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const circonstanceOptions1 = [
    { key: "Symptomatologie", value: "symptomatologie" },
    { key: "Complication", value: "complication" },
    { key: "Découverte fortuite", value: "decouverteFortuite" },
    { key: "Dépistage de FA", value: "depistageDeFA" },
  ];
  const circonstanceOptions2 = [
    { key: "Insuffisance cardiaque", value: "InsuffisanceCardiaque" },
    { key: "Accident thrombo embolique", value: "accidentThromboEmbolique" },
  ];
  const episodeFAOptions = [
    { key: "Premier épisode détecté ?", value: "premierEpisodeDétecté" },
  ];

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={6} />
        {feildValues && (
          <div className="form">
            <h1>Motif d’admission/consultation</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control="checkbox"
                    label="Dans quelles circonstances la FA a-t-elle été diagnostiquée"
                    name="circonstance1"
                    options={circonstanceOptions1}
                  />
                  <FormikControl
                    control="checkbox"
                    name="circonstance2"
                    options={circonstanceOptions2}
                  />
                  <h1>Diagnostic de la FA</h1>
                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="episodeFA"
                      options={episodeFAOptions}
                    />
                    {formik.values.episodeFA.length !== 0 ? (
                      <FormikControl
                        control="input"
                        name="episodeFADate"
                        placeholder="détecté le"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  <FormikControl
                    control="input"
                    type="text"
                    name="typeFA"
                    label="Type clinique de FA"
                  />

                  <div className="button-container">
                    <NextButton disabled={formik.isSubmitting} />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80vw;

  height: 100vh;
  /* .formControl {
    margin-bottom: 20px;
  } */

  .form-container {
    display: flex;
    flex-direction: row;
    .form {
      min-height: 70vh;
      width: 55vw;
      position: relative;
      h1 {
        color: #243153;
        margin: 1rem 2rem;
      }
      .field {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .button-container {
        width: 45vw;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 1.5rem 0rem;
      }
    }
  }
`;
