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

export default function SymptomesALinclusion() {
  const initialValues = {
    symptomeFA: "",
    symptomes: [],
    severitéSymptome: "",
  };
  const validationSchema = Yup.object({
    symptomeFA: Yup.string().required(),
    symptomes: Yup.array().required(),
    severitéSymptome: Yup.string().required(),
  });

  const onSubmit = (values) => console.log(values);

  const symptomeFAOptions = [
    {
      key: "Asymptomatique",
      value: "asymptomatique ",
    },
    {
      key: "Symptômes non liés à la FA",
      value: "symptômesNonLiésALaFA  ",
    },
    {
      key: "Symptômes liés à la FA",
      value: "symptômesLiésALaFA  ",
    },
  ];
  const symptomesOptions = [
    { key: "Dyspnée", value: "dyspnée" },
    { key: "Asthénie", value: "asthénie" },
    { key: "douleurs thoraciques", value: "douleursChoraciques" },
    { key: "Palpitations", value: "palpitations" },
    { key: "syncope ou lipothymie", value: "syncopeOuLipothymie" },
  ];
  const severitéSymptomeOptions = [
    { key: "1", value: "1" },
    { key: "2a", value: "2a" },
    { key: "2b", value: "2b" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
  ];

  return (
    <StyledDiv>
      <NavTop />
      <Title />
      <Horibar />
      <div className="form-container">
        <VertiBar />
        <div className="form">
          <h1>Symptômes à l'inclusion</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control="radio"
                  label="Quels symptômes à l’inclusion du patient ?"
                  name="symptomeFA"
                  options={symptomeFAOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="symptomes"
                  options={symptomesOptions}
                />
                <FormikControl
                  control="radio"
                  name="severitéSymptome"
                  label="Sévérité des symptômes (score EHRA)"
                  options={severitéSymptomeOptions}
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
