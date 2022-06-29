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

export default function Suivi6() {
  const navigate = useNavigate();
  const initialValues = {
    reductionDosageS6: [],
    causeReductionS6: "",
    etatPatientControleS6: "",
    persistanceS6: [],
    persistanceOptionsS6: [],
    complicationS6: [],
    decesS6: [],
    decesOptionS6: [],
    hospitalisationS6: [],
    avcS6: [],
    complicationHemoragiqueS6: "",
    traitementS6: "",
    traitementOption1S6: [],
    traitementOption2S6: [],
    traitementOption3S6: "",
    anticoagulantOralS6: "",
    antiagrégantPlaquettaireS6: "",
    strategieRythmeS6: [],
    strategieRythme1S6: "",
    strategieRythme2S6: [],
    strategieRythme3S6: [],
    strategieRythme21S6: "",
    strategieFrequenceS6: [],
    strategieFrequence1S6: [],
  };
  const validationSchema = Yup.object({
    reductionDosageS6: Yup.array(),
    causeReductionS6: Yup.string(),
    etatPatientControleS6: Yup.string(),
    persistanceS6: Yup.array(),
    complicationS6: Yup.array(),
    persistanceOptionsS6: Yup.array(),
    decesS6: Yup.array(),
    decesOptionS6: Yup.array(),
    hospitalisationS6: Yup.array(),
    avcS6: Yup.array(),
    complicationHemoragiqueS6: Yup.string(),
    traitementS6: Yup.string(),
    traitementOption1S6: Yup.array(),
    traitementOption2S6: Yup.array(),
    traitementOption3S6: Yup.string(),
    anticoagulantOralS6: Yup.string("ce champs doit être alpahnumiérique"),
    antiagrégantPlaquettaireS6: Yup.string(
      "ce champs doit être alpahnumiérique"
    ),
    strategieRythmeS6: Yup.array(),
    strategieRythme1S6: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme2S6: Yup.array(),
    strategieRythme21S6: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme3S6: Yup.array(),
    strategieFrequenceS6: Yup.array(),
    strategieFrequence1S6: Yup.array(),
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
      await addingInformationsPatient(user, param, { suivi6: true });
      navigate(`/patientinfo/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const reductionDosageOptions6 = [
    { key: "reduction de dosage", value: "reduction de dosage" },
  ];

  const causeReductionOptionsS6 = [
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
    {
      key: "Autre hémorragie majeure",
      value: "Autre hémorragie majeure",
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
  const traitementRadioOptionS6 = [
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
  const strategieRythmeOptionS6 = [
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
        <VertiBar number={2} />
        {feildValues && (
          <div className="form">
            <h1>Contrôle à 6 mois</h1>
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
                      name="etatPatientControleS6"
                      options={etatOptions}
                      label="État du patient au contrôle "
                    /> */}
                    <div className="feild">
                      <FormikControl
                        control="checkbox"
                        name="persistanceS6"
                        options={persistanceOptions}
                      />
                      {formik.values.persistanceS6.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="persistanceOptionsS6"
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
                        name="complicationS6"
                        options={complicationOptions}
                      />
                    </div>
                    {formik.values.complicationS6.length !== 0 ? (
                      <div className="child">
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="decesS6"
                            options={decesOptions}
                          />
                          {formik.values.decesS6.length !== 0 ? (
                            <div className="child">
                              <div>
                                <FormikControl
                                  control="checkbox"
                                  name="decesOptionS6"
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
                            name="avcS6"
                            options={avcOptions}
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="radio"
                            name="complicationHemoragiqueS6"
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
                      name="traitementS6"
                      options={traitementOptions}
                      label="Le patient suit un traitemnt anti thrombotique"
                    />
                    {formik.values.traitementS6 === "oui" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption1S6"
                            options={traitementOptionOptions1}
                          />
                          {formik.values.traitementOption1S6.length !== 0 ? (
                            <FormikControl
                              control="select"
                              name="anticoagulantOralS6"
                              options={traitementRadioOptions1}
                            />
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="reductionDosageS6"
                            options={reductionDosageOptions6}
                          />
                          {formik.values.reductionDosageS6.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="radio"
                                name="causeReductionS6"
                                options={causeReductionOptionsS6}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption2S6"
                            options={traitementOptionOptions2}
                          />
                          {formik.values.traitementOption2S6.length !== 0 ? (
                            <FormikControl
                              control="radio"
                              name="antiagrégantPlaquettaireS6"
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
                    {formik.values.traitementS6 === "non" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="radio"
                            name="traitementOption3S6"
                            options={traitementRadioOptionS6}
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
                        name="strategieRythmeS6"
                        options={strategieRythmeOptions}
                      />
                      {formik.values.strategieRythmeS6.length !== 0 ? (
                        <div className="child">
                          <FormikControl
                            control="radio"
                            name="strategieRythme1S6"
                            options={strategieRythmeOptions1}
                          />
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieRythme2S6"
                              options={strategieRythmeOptions2}
                            />
                            {formik.values.strategieRythme2S6.length !== 0 ? (
                              <div className="child">
                                <FormikControl
                                  control="radio"
                                  name="strategieRythme21S6"
                                  options={strategieRythmeOptions21}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <FormikControl
                            control="checkbox"
                            name="strategieRythme3S6"
                            options={strategieRythmeOptionS6}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="field">
                      <FormikControl
                        control="checkbox"
                        name="strategieFrequenceS6"
                        options={strategieFrequenceOptions}
                      />
                      {formik.values.strategieFrequenceS6.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieFrequence1S6"
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
  width: 79vw;

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
