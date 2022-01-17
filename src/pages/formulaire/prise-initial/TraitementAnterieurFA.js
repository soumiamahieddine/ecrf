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

export default function TraitementAnterieurFA() {
  const initialValues = {
    traitementMedical: [],
    traitementMedicalInput: "",
    antecedentCardioversion: [],
    antecedentAblation: [],
    implantationPaceMaker: [],
  };
  const validationSchema = Yup.object({
    traitementMedical: Yup.array().required(),
    traitementMedicalInput: Yup.string().required(),
    antecedentCardioversion: Yup.array().required(),
    antecedentAblation: Yup.array().required(),
    implantationPaceMaker: Yup.array().required(),
  });

  const onSubmit = (values) => console.log(values);

  const traitementOptions = [
    {
      key: "Traitement Medical",
      value: "traitementMedical",
    },
  ];
  const antecendentCardioOptions = [
    { key: "Antécédent de cardioversion", value: "antecedentCardioversion" },
  ];
  const antecedentAblationOptions = [
    { key: "Antécédent d'Ablation", value: "antecedentAblation" },
  ];
  const implantationPaceMakerOptions = [
    { key: "Implantation de PaceMaker", value: "implantationPaceMaker" },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title />
      <Horibar />
      <div className="form-container">
        <VertiBar />
        <div className="form">
          <h1>Traitement Antérieur de La FA</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="traitementMedical"
                    options={traitementOptions}
                  />
                  {formik.values.traitementMedical.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="traitementMedicalInput"
                      width="400px"
                    />
                  ) : (
                    ""
                  )}
                </div>

                <FormikControl
                  control="checkbox"
                  name="antecedentCardioversion"
                  options={antecendentCardioOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="antecedentAblation"
                  options={antecedentAblationOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="implantationPaceMaker"
                  options={implantationPaceMakerOptions}
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
