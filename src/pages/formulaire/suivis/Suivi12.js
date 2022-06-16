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
import VertiBar from "../../../components/VertiBar4";
import NextButton from "../../../components/NextButton";

export default function Suivi12() {
  const navigate = useNavigate();
  const initialValues = {
    reductionDosageS12: [],
    causeReductionS12: "",
    etatPatientControleS12: "",
    persistanceS12: [],
    persistanceOptionsS12: [],
    complicationS12: [],
    decesS12: [],
    decesOptionS12: [],
    hospitalisationS12: [],
    avcS12: [],
    complicationHemoragiqueS12: "",
    traitementS12: "",
    traitementOption1S12: [],
    traitementOption2S12: [],
    traitementOption3S12: "",
    anticoagulantOralS12: "",
    antiagrégantPlaquettaireS12: "",
    strategieRythmeS12: [],
    strategieRythme1S12: "",
    strategieRythme2S12: [],
    strategieRythme3S12: [],
    strategieRythme21S12: "",
    strategieFrequenceS12: [],
    strategieFrequence1S12: [],
  };
  const validationSchema = Yup.object({
    reductionDosageS12: Yup.array(),
    causeReductionS12: Yup.string(),
    etatPatientControleS12: Yup.string(),
    persistanceS12: Yup.array(),
    complicationS12: Yup.array(),
    persistanceOptionsS12: Yup.array(),
    decesS12: Yup.array(),
    decesOptionS12: Yup.array(),
    hospitalisationS12: Yup.array(),
    avcS12: Yup.array(),
    complicationHemoragiqueS12: Yup.string(),
    traitementS12: Yup.string(),
    traitementOption1S12: Yup.array(),
    traitementOption2S12: Yup.array(),
    traitementOption3S12: Yup.string(),
    anticoagulantOralS12: Yup.string("ce champs doit être alpahnumiérique"),
    antiagrégantPlaquettaireS12: Yup.string(
      "ce champs doit être alpahnumiérique"
    ),
    strategieRythmeS12: Yup.array(),
    strategieRythme1S12: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme2S12: Yup.array(),
    strategieRythme21S12: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme3S12: Yup.array(),
    strategieFrequenceS12: Yup.array(),
    strategieFrequence1S12: Yup.array(),
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
      await addingInformationsPatient(user, param, { suivi12: true });
      navigate(`/patientinfo/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const reductionDosageOptions12 = [
    { key: "reduction de dosage", value: "reduction de dosage" },
  ];

  const causeReductionOptionsS12 = [
    { key: "Insuffisance rénale", value: "Insuffisance rénale" },
    { key: "Poids", value: "Poids" },
    { key: "Autre", value: "Autre" },
  ];

  const etatOptions = [
    {
      key: "vivant",
      value: "vivant",
    },
    {
      key: "décédé",
      value: "décédé",
    },
  ];
  const complicationOptions = [
    {
      key: "Complication",
      value: "Complication",
    },
  ];
  const decesOptions = [
    {
      key: "décès",
      value: "décès",
    },
  ];
  const avcOptions = [
    {
      key: "AVC ischémique ou embolie systémique",
      value: "AVC ischémique ou embolie systémique",
    },
  ];
  const complicationHemoragiqueOptions = [
    {
      key: "gastro intestinale",
      value: "gastro intestinale",
    },
    {
      key: "cérébrale",
      value: "cérébrale",
    },
  ];
  const decesOptionsOptions = [
    {
      key: "cardiovasculaire",
      value: "cardiovasculaire",
    },
    {
      key: "autre",
      value: "autre",
    },
  ];
  const hospitalisationOptions = [
    {
      key: "Hospitalisation pour insuffisance cardiaque",
      value: "Hospitalisation pour insuffisance cardiaque",
    },
  ];
  const persistanceOptions = [
    {
      key: "Persistance des symptômes liés à la FA",
      value: "Persistance des symptômes liés à la FA",
    },
  ];
  const traitementRadioOptions1 = [
    {
      key: "",
      value: "",
    },
    {
      key: "Acenocoumarol",
      value: "Acenocoumarol",
    },
    {
      key: "Fluindione",
      value: "Fluindione",
    },
    {
      key: "Rivaroxaban 20 mg",
      value: "Rivaroxaban 20 mg",
    },
    {
      key: "Rivaroxaban 15 mg",
      value: "Rivaroxaban 15 mg",
    },
    {
      key: "Dabigatran 110 mg",
      value: "Dabigatran 110 mg",
    },
    {
      key: "Dabigatran 150 mg",
      value: "Dabigatran 150 mg",
    },
    {
      key: "Apixaban 5 mg",
      value: "Apixaban 5 mg",
    },
    {
      key: "Apixaban 2.5 mg",
      value: "Apixaban 2.5 mg",
    },
  ];
  const traitementOptions = [
    {
      key: "oui",
      value: "oui",
    },
    {
      key: "non",
      value: "non",
    },
  ];
  const traitementOptionOptions1 = [
    {
      key: "Anticoagulant oral",
      value: "AnticoagulantOral",
    },
  ];
  const persistanceOptions1 = [
    {
      key: "Dyspnée",
      value: "Dyspnée",
    },
    {
      key: "asthénie",
      value: "asthénie",
    },
    {
      key: "douleurs thoraciques",
      value: "douleurs thoraciques",
    },
    {
      key: "Palpitations",
      value: "Palpitations",
    },
    {
      key: "syncope",
      value: "syncope",
    },
    {
      key: "lipothymie",
      value: "lipothymie",
    },
  ];
  const traitementOptionOptions2 = [
    {
      key: "Antiagrégant plaquettaire",
      value: "Antiagrégant plaquettaire",
    },
  ];
  const traitementRadioOptions2 = [
    {
      key: "Aspirine",
      value: "Aspirine",
    },
    {
      key: "Clopidogrel",
      value: "Clopidogrel",
    },
  ];
  const traitementRadioOptionS12 = [
    {
      key: "Contre-indicaton",
      value: "Contre-indicaton",
    },
    {
      key: "Evenement hémoragique majeur",
      value: "Evenement hémoragique majeur",
    },
    {
      key: "Refus du patient",
      value: "Refus du patient",
    },
    {
      key: "Conditions socio-économiques",
      value: "Conditions socio-économiques",
    },
    {
      key: "pas d'indication",
      value: "pas d'indication",
    },
  ];
  const strategieRythmeOptions = [
    {
      key: "Stratégie de controle du rythme",
      value: "Stratégie de controle du rythme",
    },
  ];
  const strategieRythmeOptions1 = [
    {
      key: "Cardioversion éléctrique",
      value: "Cardioversion éléctrique",
    },
    {
      key: "Cardioversion pharmacologique",
      value: "Cardioversion pharmacologique",
    },
  ];
  const strategieRythmeOptions2 = [
    {
      key: "Traitement anti arythmique",
      value: "Traitement anti arythmique",
    },
  ];
  const strategieRythmeOptions21 = [
    {
      key: "Amiodarone",
      value: "Amiodarone",
    },
    {
      key: "flecainide",
      value: "flecainide",
    },
    {
      key: "Sotalol",
      value: "Sotalol",
    },
  ];
  const strategieRythmeOptionS12 = [
    {
      key: "Ablation de la Fa",
      value: "Ablation de la Fa",
    },
  ];
  const strategieFrequenceOptions = [
    {
      key: "Stratégie de contrôle de la fréquence",
      value: "Stratégie de contrôle de la fréquence",
    },
  ];
  const strategieFrequenceOptions1 = [
    {
      key: "Bétabloquant",
      value: "Bétabloquant",
    },
    {
      key: "Digoxine",
      value: "Digoxine",
    },
    {
      key: "Amiodarone",
      value: "Amiodarone",
    },
    {
      key: "Inhibiteur calcique bradycardisant",
      value: "Inhibiteur calcique bradycardisantt",
    },
  ];

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <div className="form-container">
        <VertiBar number={3} />
        {feildValues && (
          <div className="form">
            <h1>Contrôle à 12 mois</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div>
                    <h2>Évaluation clinique </h2>
                    {/* <FormikControl
                      control="radio"
                      name="etatPatientControleS12"
                      options={etatOptions}
                      label="État du patient au contrôle "
                    /> */}
                    <div className="feild">
                      <FormikControl
                        control="checkbox"
                        name="persistanceS12"
                        options={persistanceOptions}
                      />
                      {formik.values.persistanceS12.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="persistanceOptionsS12"
                              options={persistanceOptions1}
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="feild">
                      <FormikControl
                        control="checkbox"
                        name="complicationS12"
                        options={complicationOptions}
                      />
                    </div>
                    {formik.values.complicationS12.length !== 0 ? (
                      <div className="child">
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="decesS12"
                            options={decesOptions}
                          />
                          {formik.values.decesS12.length !== 0 ? (
                            <div className="child">
                              <div>
                                <FormikControl
                                  control="checkbox"
                                  name="decesOptionS12"
                                  options={decesOptionsOptions}
                                />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="avcS12"
                            options={avcOptions}
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="radio"
                            name="complicationHemoragiqueS12"
                            options={complicationHemoragiqueOptions}
                            label="Complications hémorragiques"
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <h2>Traitement Antithrombotique</h2>
                    <FormikControl
                      control="radio"
                      name="traitementS12"
                      options={traitementOptions}
                      label="Le patient suit un traitemnt anti thrombotique"
                    />
                    {formik.values.traitementS12 === "oui" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption1S12"
                            options={traitementOptionOptions1}
                          />
                          {formik.values.traitementOption1S12.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="select"
                                name="anticoagulantOralS12"
                                options={traitementRadioOptions1}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="reductionDosageS12"
                            options={reductionDosageOptions12}
                          />
                          {formik.values.reductionDosageS12.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="radio"
                                name="causeReductionS12"
                                options={causeReductionOptionsS12}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption2S12"
                            options={traitementOptionOptions2}
                          />
                          {formik.values.traitementOption2S12.length !== 0 ? (
                            <FormikControl
                              control="radio"
                              name="antiagrégantPlaquettaireS12"
                              options={traitementRadioOptions2}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {formik.values.traitementS12 === "non" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="radio"
                            name="traitementOption3S12"
                            options={traitementRadioOptionS12}
                            label="Pour quelle raison ?"
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <h2>Traitement de la FA</h2>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="strategieRythmeS12"
                        options={strategieRythmeOptions}
                      />
                      {formik.values.strategieRythmeS12.length !== 0 ? (
                        <div className="child">
                          <FormikControl
                            control="radio"
                            name="strategieRythme1S12"
                            options={strategieRythmeOptions1}
                          />
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieRythme2S12"
                              options={strategieRythmeOptions2}
                            />
                            {formik.values.strategieRythme2S12.length !== 0 ? (
                              <div className="child">
                                <FormikControl
                                  control="radio"
                                  name="strategieRythme21S12"
                                  options={strategieRythmeOptions21}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <FormikControl
                            control="checkbox"
                            name="strategieRythme3S12"
                            options={strategieRythmeOptionS12}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="strategieFrequenceS12"
                        options={strategieFrequenceOptions}
                      />
                      {formik.values.strategieFrequenceS12.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieFrequence1S12"
                              options={strategieFrequenceOptions1}
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="button-container">
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
