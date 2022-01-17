import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormikControl";

import NavTop from "../../../components/NavTop";
import Title from "../../../components/Inscreptiontitle";
import Horibar from "../../../components/Horibar";
import VertiBar from "../../../components/VertiBar";
import NextButton from "../../../components/NextButton";

export default function DonnéesDémograghiques() {
  const circonstanceOptions = [
    { key: "Consultation", value: "consultation" },
    { key: "Urgence", value: "urgence" },
    { key: "Hospitalisation", value: "hospitalisation" },
  ];
  const situationOptions = [
    { key: "Célibataire", value: "celibataire" },
    { key: "Marié", value: "marié" },
    { key: "Divorcé", value: "divorcé" },
    { key: "Veuf", value: "veuf" },
  ];
  const sexeOptions = [
    { key: "Homme", value: "homme" },
    { key: "Femme", value: "femme" },
  ];
  const residenceOptions = [
    { key: "", value: "" },
    { key: "Alger", value: "alger" },
    { key: "Constantine", value: "constantine" },
    { key: "Oran", value: "oran" },
    { key: "Annaba", value: "Annaba" },
    { key: "isser", value: "isser" },
  ];
  const assuranceOptions = [
    { key: "assuré", value: "assuré" },
    { key: "non-assuré", value: "non-assuré" },
  ];
  const niveauOptions = [
    { key: "", value: "" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
  ];

  const initialValues = {
    circonstance: "",
    sexe: "",
    age: "",
    residence: "",
    situationFamiliale: "",
    assurance: "",
    niveau: "",
  };
  const validationSchema = Yup.object({
    circonstance: Yup.string().required(),
    sexe: Yup.string().required(),
    age: Yup.string().required(),
    residence: Yup.string().required(),
    situationFamiliale: Yup.string().required(),
    assurance: Yup.string().required(),
    niveau: Yup.string().required(),
  });

  const onSubmit = (values) => console.log(values);
  return (
    <StyledDiv>
      <NavTop />
      <Title />
      <Horibar />
      <div className="form-container">
        <VertiBar />
        <div className="form">
          <h1>Données démographiques</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control="radio"
                  name="circonstance"
                  label="circonstance d'inclusion"
                  options={circonstanceOptions}
                />
                <FormikControl
                  control="radio"
                  name="sexe"
                  label="sexe"
                  options={sexeOptions}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="age"
                  label="Age"
                  placeholder="age"
                  width="100px"
                />
                <FormikControl
                  control="select"
                  name="residence"
                  label="Résidence"
                  width="200px"
                  options={residenceOptions}
                />
                <FormikControl
                  control="radio"
                  name="situationFamiliale"
                  label="Situation Familiale"
                  options={situationOptions}
                />
                <FormikControl
                  control="radio"
                  name="assurance"
                  label="assurance"
                  options={assuranceOptions}
                />
                <FormikControl
                  control="select"
                  name="niveau"
                  label="Niveau socio-économique"
                  width="100px"
                  options={niveauOptions}
                />
                <div className="button-container">
                  <NextButton />
                </div>
              </Form>
            )}
          </Formik>
        </div>
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
