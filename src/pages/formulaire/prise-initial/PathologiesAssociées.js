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
import PrevButton from "../../../components/PrevButton";
import { DivIcon } from "leaflet";

export default function PathologiesAssociées() {
  const navigate = useNavigate();

  const initialValues = {
    coronaropathie: [],
    valvupathies: [],
    cardiomyopathieHypertrophique: [],
    cardiomyoathieDilatee: [],
    autreMaladie: [],
    autreMaladieDate: "auccune",
    sas: [],
    dysthyroidie: [],
    dysthyroidieType: "",
    insuffisanceRenaleChronique: [],
  };
  const validationSchema = Yup.object({
    coronaropathie: Yup.array().required("ce champs est obligatoire"),
    valvupathies: Yup.array().required("ce champs est obligatoire"),
    cardiomyopathieHypertrophique: Yup.array().required(
      "ce champs est obligatoire"
    ),
    cardiomyoathieDilatee: Yup.array().required("ce champs est obligatoire"),
    autreMaladie: Yup.array().required("ce champs est obligatoire"),
    autreMaladieDate: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
    sas: Yup.array().required("ce champs est obligatoire"),
    dysthyroidie: Yup.array().required("ce champs est obligatoire"),
    dysthyroidieType: Yup.string("ce champs doit être alpahnumiérique"),
    insuffisanceRenaleChronique: Yup.array().required(
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gettingPatient();
  }, []);
  const param = useParams();
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/facteursDeRisqueCardioVasculaire/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const valvupathiesOptions = [
    { key: "Valvulopathies", value: "valvulopathies" },
  ];
  const cardioHyperOptions = [
    {
      key: "Cardiomyoathie Hypertrophique",
      value: "Cardiomyoathie Hypertrophique",
    },
  ];
  const cardioDilateeOptions = [
    { key: "Cardiomyoathie Dilatée", value: "Cardiomyoathie Dilatée" },
  ];
  const autreOptions = [
    { key: "Autre maladie cardiaque", value: "Autre maladie cardiaque" },
  ];
  const sasOptions = [{ key: "SAS", value: "sas" }];
  const dysthyroidieOptions = [{ key: "Dysthyroidie", value: "dysthyroidie" }];
  const dysthyroidieTypeOptions = [
    { key: "Hypothyroidie", value: "hypothyroidie" },
    { key: "Hyperthyroidie", value: "hyperthyroidie" },
  ];
  const insuffisanceOptions = [
    {
      key: "Insuffisance Renale Chronique",
      value: "Insuffisance Renale Chronique",
    },
  ];
  const coronaOptions = [
    { key: "Coronaropthie", value: "Coronaropthie" },
    {
      key: "Insuffisance cardiaque chronique",
      value: "Insuffisance cardiaque chronique",
    },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={4} />
        {feildValues && (
          <div className="form">
            <h1>Pathologies Associées</h1>
            <Formik
              initialValues={feildValues}
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
                      <FormikControl control="input" name="autreMaladieDate" />
                    ) : (
                      <div hidden="true">
                        {(formik.values.autreMaladieDate = "auccune")}
                      </div>
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

                  {formik.values.dysthyroidie.length !== 0 ? (
                    <div className="field">
                      <div className="child">
                        <FormikControl
                          control="radio"
                          name="dysthyroidieType"
                          options={dysthyroidieTypeOptions}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>{(formik.values.dysthyroidieType = "")}</div>
                  )}

                  <FormikControl
                    control="checkbox"
                    name="insuffisanceRenaleChronique"
                    options={insuffisanceOptions}
                  />

                  <div className="button-container">
                    <PrevButton
                      type="button"
                      onClick={() => {
                        navigate(-1);
                      }}
                      title="Précedent"
                    />
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
      .child {
        margin-left: 2rem;
      }
    }
  }
`;
