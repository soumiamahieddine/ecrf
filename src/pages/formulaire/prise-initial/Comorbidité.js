import React, { useState, useEffect } from "react";
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

export default function Comorbidité() {
  const navigate = useNavigate();
  const initialValues = {
    antecedent: [],
    evenementHemoragiqueMajeur: [],
    cancer: [],
    pathologieVasculaire: [],
  };
  const validationSchema = Yup.object({
    antecedent: Yup.array().required("ce champs est obligatoire"),
    evenementHemoragiqueMajeur: Yup.array().required(
      "ce champs est obligatoire"
    ),
    cancer: Yup.array().required("ce champs est obligatoire"),
    pathologieVasculaire: Yup.array().required("ce champs est obligatoire"),
  });

  const param = useParams();
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
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/traitementAnterieurFA/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const antecendentOptions = [
    {
      key: "Antécédent d'AVC/AIT/Hombolie systémique",
      value: "Antécédent d'AVC/AIT/Hombolie systémique",
    },
  ];
  const evenmentOptions = [
    {
      key: "Evènement Hémoragique Majeur",
      value: "Evènement Hémoragique Majeur",
    },
  ];
  const cancerOptions = [{ key: "Cancer", value: "cancer" }];
  const pathologieOptions = [
    { key: "Pathologie Vasculaire", value: "Pathologie Vasculaire" },
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
            <h1>Comorbidité</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control="checkbox"
                    name="antecedent"
                    options={antecendentOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="evenementHemoragiqueMajeur"
                    options={evenmentOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="cancer"
                    options={cancerOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="pathologieVasculaire"
                    options={pathologieOptions}
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
        margin: 1rem 0rem;
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
