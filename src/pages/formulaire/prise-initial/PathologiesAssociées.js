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

export default function PathologiesAssociées() {
  const initialValues = {
    coronaropathie: [],
    valvupathies: [],
    cardiomyopathieHypertrophique: [],
    cardiomyoathieDilatee: [],
    autreMaladie: [],
    autreMaladieDate: "",
    sas: [],
    dysthyroidie: [],
    insuffisanceRenaleChronique: [],
  };
  const validationSchema = Yup.object({
    coronaropathie: Yup.array().required(),
    valvupathies: Yup.array().required(),
    cardiomyopathieHypertrophique: Yup.array().required(),
    cardiomyoathieDilatee: Yup.array().required(),
    autreMaladie: Yup.array().required(),
    autreMaladieDate: Yup.string().required(),
    sas: Yup.array().required(),
    dysthyroidie: Yup.array().required(),
    insuffisanceRenaleChronique: Yup.array().required(),
  });

  const onSubmit = (values) => console.log(values);

  const valvupathiesOptions = [{ key: "Valvupathies", value: "valvupathies" }];
  const cardioHyperOptions = [
    {
      key: "Cardiomyoathie Hypertrophique",
      value: "cardiomyoathieHypertrophique",
    },
  ];
  const cardioDilateeOptions = [
    { key: "Cardiomyoathie Dilatée", value: "cardiomyoathieDilatée" },
  ];
  const autreOptions = [
    { key: "Autre maladie cardiaque", value: "autreMaladie" },
  ];
  const sasOptions = [{ key: "SAS", value: "sas" }];
  const dysthyroidieOptions = [{ key: "Dysthyroidie", value: "dysthyroidie" }];
  const insuffisanceOptions = [
    {
      key: "Insuffisance Renale Chronique",
      value: "insuffisanceRenaleChronique",
    },
  ];
  const coronaOptions = [
    { key: "coronaropthie", value: "coronaropthie" },
    {
      key: "insuffisance cardiaque cronique",
      value: "insuffisance cardiaque cronique",
    },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title />
      <Horibar />
      <div className="form-container">
        <VertiBar />
        <div className="form">
          <h1>Pathologies Associées</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormikControl
                  control="checkbox"
                  name="coronaropathie"
                  options={coronaOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="valvupathies"
                  options={valvupathiesOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="cardiomyopathieHypertrophique"
                  options={cardioHyperOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="cardiomyoathieDilatee"
                  options={cardioDilateeOptions}
                />
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="autreMaladie"
                    options={autreOptions}
                  />
                  {formik.values.autreMaladie.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="autreMaladieDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <FormikControl
                  control="checkbox"
                  name="sas"
                  options={sasOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="dysthyroidie"
                  options={dysthyroidieOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="insuffisanceRenaleChronique"
                  options={insuffisanceOptions}
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
