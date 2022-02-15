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
import VertiBar from "../../../components/Vertibar3";
import NextButton from "../../../components/NextButton";

export default function TraitementDeLaFA() {
  const navigate = useNavigate();
  const initialValues = {
    strategieRythme: [],
    strategieRythme1: "",
    strategieRythme2: [],
    strategieRythme3: [],
    strategieRythme21: "",
    strategieFrequence: [],
    strategieFrequence1: [],
    strategieFrequence11: "",
  };
  const validationSchema = Yup.object({
    strategieRythme: Yup.array(),
    strategieRythme1: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme2: Yup.array(),
    strategieRythme21: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme3: Yup.array(),
    strategieFrequence: Yup.array(),
    strategieFrequence1: Yup.array(),
    strategieFrequence11: Yup.string("ce champs doit être alpahnumiérique"),
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
    gettingPatient();
  }, []);
  const param = useParams();
  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/autreTraitementMedical/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const strategieRythmeOptions = [
    {
      key: "Stratégie de controle du rythme",
      value: "strategieDeControleDuRythme",
    },
  ];
  const strategieRythmeOptions1 = [
    {
      key: "Cardioversion éléctrique",
      value: "cardioversionEléctrique",
    },
    {
      key: "Cardioversion pharmacologique",
      value: "cardioversionPharmacologique",
    },
  ];
  const strategieRythmeOptions2 = [
    {
      key: "Traitement anti arythmique",
      value: "TraitementAntiArythmique",
    },
  ];
  const strategieRythmeOptions21 = [
    {
      key: "Amiodarone",
      value: "amiodarone2",
    },
  ];
  const strategieRythmeOptions3 = [
    {
      key: "Ablation de la Fa",
      value: "ablationDeLaFa",
    },
  ];
  const strategieFrequenceOptions = [
    {
      key: "Stratégie de contrôle de la fréquence",
      value: "strategieDeControleDeLaFrequence",
    },
  ];
  const strategieFrequenceOptions1 = [
    {
      key: "Bétabloquant",
      value: "bétabloquant",
    },
  ];
  const strategieFrequenceOptions11 = [
    {
      key: "Digoxine",
      value: "digoxine",
    },
    {
      key: "Amiodarone",
      value: "amiodarone",
    },
    {
      key: "Inhibiteur calcique bradycardisant",
      value: "inhibiteurCalciqueBradycardisant",
    },
  ];

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={3} />
      <div className="form-container">
        <VertiBar number={2} />
        {feildValues && (
          <div className="form">
            <h1>Traitement de la FA</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="strategieRythme"
                      options={strategieRythmeOptions}
                    />
                    {formik.values.strategieRythme.length !== 0 ? (
                      <div className="child">
                        <FormikControl
                          control="radio"
                          name="strategieRythme1"
                          options={strategieRythmeOptions1}
                        />
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="strategieRythme2"
                            options={strategieRythmeOptions2}
                          />
                          {formik.values.strategieRythme2.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="radio"
                                name="strategieRythme21"
                                options={strategieRythmeOptions21}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <FormikControl
                          control="checkbox"
                          name="strategieRythme3"
                          options={strategieRythmeOptions3}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="strategieFrequence"
                      options={strategieFrequenceOptions}
                    />
                    {formik.values.strategieFrequence.length !== 0 ? (
                      <div className="child">
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="strategieFrequence1"
                            options={strategieFrequenceOptions1}
                          />
                          {formik.values.strategieFrequence1.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="radio"
                                name="strategieFrequence11"
                                options={strategieFrequenceOptions11}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="button-container">
                    <NextButton />
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
        margin: 1rem 2rem;
      }
      .child {
        margin-left: 2rem;
      }
      .child {
        margin-left: 2rem;
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
