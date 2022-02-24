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

export default function FacteursDeRisqueCardioVasculaire() {
  const navigate = useNavigate();
  const htaOptions = [{ key: "Oui", value: "oui" }];
  const diabeteOptions = [{ key: "Oui", value: "oui" }];
  const dyslipidemieOptions = [{ key: "Oui", value: "oui" }];
  const sedentariteOptions = [{ key: "Oui", value: "oui" }];
  const tabagismeOptions = [
    { key: "Oui", value: "oui" },
    { key: "Non", value: "non" },
    { key: "Servé", value: "serve" },
  ];
  const alcoolOptions = [
    { key: "Oui", value: "oui" },
    { key: "Non", value: "non" },
    { key: "Servé", value: "serve" },
  ];
  const scoreCHADOptions = [
    {
      key: "0",
      value: "0",
    },
    {
      key: "1",
      value: "1",
    },
    {
      key: "+2",
      value: "+2",
    },
  ];

  const initialValues = {
    taille: "",
    poids: "",
    htaDate: "",
    hta: [],
    diabete: [],
    diabeteDate: "",
    dyslipidemie: [],
    dyslipidemieDate: "",
    tabagisme: "",
    consommationAlcool: "",
    sedentarite: [],
    scoreCHAD: "",
    scoreHasBled: "",
  };
  const validationSchema = Yup.object({
    taille: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    poids: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    hta: Yup.array().required("ce champs est obligatoire"),
    htaDate: Yup.string("ce champs doit être alpahnumiérique"),
    diabete: Yup.array().required("ce champs est obligatoire"),
    diabeteDate: Yup.string("ce champs doit être alpahnumiérique"),
    dyslipidemieDate: Yup.string("ce champs doit être alpahnumiérique"),
    dyslipidemie: Yup.array().required("ce champs est obligatoire"),
    tabagisme: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    consommationAlcool: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
    sedentarite: Yup.array().required("ce champs est obligatoire"),
    scoreCHAD: Yup.string().required("ce champs est obligatoire"),
    scoreHasBled: Yup.string("ce champs doit être alpahnumiérique"),
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
      navigate(`/comorbidite/${param.idpatient}`);
    });
    return unsubscribe;
  };
  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={5} />
        {feildValues && (
          <div className="form">
            <h1>Facteurs de risque cardio vasculaire</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="field gap">
                      <FormikControl
                        control="input"
                        type="text"
                        name="taille"
                        placeholder="m"
                        width="100px"
                        label="Taille"
                      />
                      <FormikControl
                        control="input"
                        type="text"
                        name="poids"
                        placeholder="kg"
                        width="100px"
                        label="Poids"
                      />
                    </div>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="hta"
                        label="HTA"
                        options={htaOptions}
                      />
                      {formik.values.hta.length !== 0 ? (
                        <FormikControl
                          control="input"
                          name="htaDate"
                          placeholder="depuis"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="diabete"
                        label="Diabète"
                        options={diabeteOptions}
                      />
                      {formik.values.diabete.length !== 0 ? (
                        <FormikControl
                          control="input"
                          name="diabeteDate"
                          placeholder="depuis"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="dyslipidemie"
                        label="Dyslipidémie"
                        options={dyslipidemieOptions}
                      />
                      {formik.values.dyslipidemie.length !== 0 ? (
                        <FormikControl
                          control="input"
                          name="dyslipidemieDate"
                          placeholder="depuis"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <FormikControl
                      control="radio"
                      name="tabagisme"
                      label="Tabagisme"
                      options={tabagismeOptions}
                    />
                    <FormikControl
                      control="radio"
                      name="consommationAlcool"
                      label="Consommation d'alcool"
                      options={alcoolOptions}
                    />
                    <FormikControl
                      control="checkbox"
                      name="sedentarite"
                      label="Sédentarité"
                      options={sedentariteOptions}
                    />
                    <h2>Risque thrombo embolique </h2>
                    <div className="field">
                      <FormikControl
                        control="radio"
                        name="scoreCHAD"
                        label="score CHADS2SVAC"
                        options={scoreCHADOptions}
                      />
                    </div>
                    <h2>Risque hémorragique </h2>
                    <FormikControl
                      control="input"
                      type="text"
                      name="scoreHasBled"
                      label="Score HAS BLED"
                      placeholder="Score"
                      width="300px"
                    />

                    <div className="button-container">
                      <NextButton disabled={formik.isSubmitting} />
                    </div>
                  </Form>
                );
              }}
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
  h2 {
    margin: 20px 0 15px 0;
    color: #243153;
  }
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
        align-items: flex-end;
        &.gap {
          gap: 1rem;
        }
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
