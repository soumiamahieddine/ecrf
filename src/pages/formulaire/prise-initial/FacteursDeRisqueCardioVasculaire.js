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

export default function FacteursDeRisqueCardioVasculaire() {
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
    bmi: Yup.string().required(),
    hta: Yup.array().required(),
    htaDate: Yup.string().required(),
    diabete: Yup.array().required(),
    diabeteDate: Yup.string().required(),
    dyslipidemieDate: Yup.string().required(),
    dyslipidemie: Yup.array().required(),
    tabagisme: Yup.string().required(),
    consommationAlcool: Yup.string().required(),
    sedentarite: Yup.array().required(),
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
            {(formik) => {
              console.log(formik);
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
