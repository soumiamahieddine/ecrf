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

export default function AutreTraitementMedical() {
  const initialValues = {
    iec: [],
    iecDate: "",
    betabloquant: [],
    betabloquantDate: "",
    diurétiqueAnse: [],
    diurétiqueAnseDate: "",
    diurétiqueThiazidique: [],
    diurétiqueThiazidiqueDate: "",
    aldosterone: [],
    aldosteroneDate: "",
    statine: [],
    statineDate: "",
    antiDiabetiqueOraux: [],
    insuline: [],
    hormonesThyroidiennes: [],
  };
  const validationSchema = Yup.object({
    iec: Yup.array().required(),
    iecDate: Yup.string().required(),
    betabloquant: Yup.array().required(),
    betabloquantDate: Yup.string().required(),
    diurétiqueAnse: Yup.array().required(),
    diurétiqueAnseDate: Yup.string().required(),
    diurétiqueThiazidique: Yup.array().required(),
    diurétiqueThiazidiqueDate: Yup.string().required(),
    aldosterone: Yup.array().required(),
    aldosteroneDate: Yup.string().required(),
    statine: Yup.array().required(),
    statineDate: Yup.string().required(),
    antiDiabetiqueOraux: Yup.array().required(),
    insuline: Yup.array().required(),
    hormonesThyroidiennes: Yup.array().required(),
  });

  const onSubmit = (values) => console.log(values);

  const iecOptions = [
    {
      key: "IEC / ARA2",
      value: "IECARA2",
    },
  ];
  const betabloquantOptions = [
    {
      key: "Bétabloquant",
      value: "betabloquant",
    },
  ];
  const diurétiqueAnseOptions = [
    {
      key: "Diurétique de l’anse",
      value: "diurétiqueAnse",
    },
  ];
  const diurétiqueThiazidiqueOptions = [
    {
      key: "Diurétique thiazidique",
      value: "diurétiqueThiazidique",
    },
  ];
  const aldosteroneOptions = [
    {
      key: "Aldostérone",
      value: "aldosterone",
    },
  ];
  const statineOptions = [
    {
      key: "Statine",
      value: "statine",
    },
  ];
  const antiDiabetiqueOrauxOptions = [
    {
      key: "Anti diabétique oraux",
      value: "antiDiabetiqueOraux",
    },
  ];
  const insulineOptions = [
    {
      key: "Insuline",
      value: "insuline",
    },
  ];
  const hormonesThyroidiennesOptions = [
    {
      key: "Hormones Thyroidiennes",
      value: "hormonesThyroidiennes",
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
          <h1>Autre traitement médical</h1>
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
                    name="iec"
                    options={iecOptions}
                  />
                  {formik.values.iec.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="iecDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="betabloquant"
                    options={betabloquantOptions}
                  />
                  {formik.values.betabloquant.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="betabloquantDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="diurétiqueAnse"
                    options={diurétiqueAnseOptions}
                  />
                  {formik.values.diurétiqueAnse.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="diurétiqueAnseDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="diurétiqueThiazidique"
                    options={diurétiqueThiazidiqueOptions}
                  />
                  {formik.values.diurétiqueThiazidique.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="diurétiqueThiazidiqueDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="aldosterone"
                    options={aldosteroneOptions}
                  />
                  {formik.values.aldosterone.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="aldosteroneDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="field">
                  <FormikControl
                    control="checkbox"
                    name="statine"
                    options={statineOptions}
                  />
                  {formik.values.statine.length !== 0 ? (
                    <FormikControl
                      control="input"
                      name="statineDate"
                      placeholder="depuis"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <FormikControl
                  control="checkbox"
                  name="antiDiabetiqueOraux"
                  options={antiDiabetiqueOrauxOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="insuline"
                  options={insulineOptions}
                />
                <FormikControl
                  control="checkbox"
                  name="hormonesThyroidiennes"
                  options={hormonesThyroidiennesOptions}
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
