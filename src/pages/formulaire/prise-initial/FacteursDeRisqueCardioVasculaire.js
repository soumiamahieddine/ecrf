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
  const initialValues = {
    bmi: "",
    htaDate: "",
    hta: [],
    diabete: [],
    diabeteDate: "",
    dyslipidemie: [],
    dyslipidemieDate: "",
    tabagisme: "",
    consommationAlcool: "",
    sedentarite: [],
  };
  const validationSchema = Yup.object({
    bmi: Yup.string("ce champs doit être alpahnumiérique").required(
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
  });
  const param = useParams();
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/pathologiesAssociees/${param.idpatient}`);
    });
    return unsubscribe;
  };
  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={2} />
        <div className="form">
          <h1>Données démographiques</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <FormikControl control="input" name="bmi" label="BMI" />
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

                  <div className="button-container">
                    <NextButton />
                  </div>
                </Form>
              );
            }}
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
        align-items: flex-end;
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