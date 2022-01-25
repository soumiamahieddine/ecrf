import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormikControl";
import { useNavigate } from "react-router-dom";

import NavTop from "../../../components/NavTop";
import Title from "../../../components/Inscreptiontitle";
import Horibar from "../../../components/Horibar";
import VertiBar from "../../../components/VertiBar";
import NextButton from "../../../components/NextButton";

export default function TraitementAnterieurFA() {
  const navigate = useNavigate();
  const initialValues = {
    traitementMedical: [],
    traitementMedicalInput: "",
    antecedentCardioversion: [],
    antecedentAblation: [],
    implantationPaceMaker: [],
  };
  const validationSchema = Yup.object({
    traitementMedical: Yup.array().required("ce champs est obligatoire"),
    traitementMedicalInput: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
    antecedentCardioversion: Yup.array().required("ce champs est obligatoire"),
    antecedentAblation: Yup.array().required("ce champs est obligatoire"),
    implantationPaceMaker: Yup.array().required("ce champs est obligatoire"),
  });

  const onSubmit = (values) => navigate("/motifDAdmission");

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
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={5} />
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
