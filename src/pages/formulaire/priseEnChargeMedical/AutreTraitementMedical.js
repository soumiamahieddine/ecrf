import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/FormikControl";
import { useNavigate, useParams } from "react-router-dom";
import {
  auth,
  addingInformationsPatient,
} from "../../../firebase/firebase.utils";

import NavTop from "../../../components/NavTop";
import Title from "../../../components/Inscreptiontitle";
import Horibar from "../../../components/Horibar";
import VertiBar from "../../../components/Vertibar3";
import NextButton from "../../../components/NextButton";

export default function AutreTraitementMedical() {
  const navigate = useNavigate();
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
    iec: Yup.array().required("ce champs est obligatoire"),
    iecDate: Yup.string("ce champs doit être alpahnumiérique"),
    betabloquant: Yup.array().required("ce champs est obligatoire"),
    betabloquantDate: Yup.string("ce champs doit être alpahnumiérique"),
    diurétiqueAnse: Yup.array().required("ce champs est obligatoire"),
    diurétiqueAnseDate: Yup.string("ce champs doit être alpahnumiérique"),
    diurétiqueThiazidique: Yup.array().required("ce champs est obligatoire"),
    diurétiqueThiazidiqueDate: Yup.string(
      "ce champs doit être alpahnumiérique"
    ),
    aldosterone: Yup.array().required("ce champs est obligatoire"),
    aldosteroneDate: Yup.string("ce champs doit être alpahnumiérique"),
    statine: Yup.array().required("ce champs est obligatoire"),
    statineDate: Yup.string("ce champs doit être alpahnumiérique"),
    antiDiabetiqueOraux: Yup.array().required("ce champs est obligatoire"),
    insuline: Yup.array().required("ce champs est obligatoire"),
    hormonesThyroidiennes: Yup.array().required("ce champs est obligatoire"),
  });

  const param = useParams();
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/patientinfo/${param.idpatient}`);
    });
    return unsubscribe;
  };

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
      <Title title="inscription d'un patient" />
      <Horibar number={3} />
      <div className="form-container">
        <VertiBar number={3} />
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
                    <FormikControl control="input" name="iecDate" />
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
                    <FormikControl control="input" name="betabloquantDate" />
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
                    <FormikControl control="input" name="diurétiqueAnseDate" />
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
                    <FormikControl control="input" name="aldosteroneDate" />
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
                    <FormikControl control="input" name="statineDate" />
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
