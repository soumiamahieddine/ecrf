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

export default function Suivi3() {
  const navigate = useNavigate();
  const initialValues = {
    reductionDosageS3: [],
    causeReductionS3: "",
    etatPatientControleS3: "",
    persistanceS3: [],
    persistanceOptionsS3: [],
    complicationS3: [],
    decesS3: [],
    decesOptionS3: [],
    hospitalisationS3: [],
    avcS3: [],
    complicationHemoragiqueS3: "",
    traitementS3: "",
    traitementOption1S3: [],
    traitementOption2S3: [],
    traitementOption3S3: "",
    anticoagulantOralS3: "",
    antiagrégantPlaquettaireS3: "",
    strategieRythmeS3: [],
    strategieRythme1S3: "",
    strategieRythme2S3: [],
    strategieRythme3S3: [],
    strategieRythme21S3: "",
    strategieFrequenceS3: [],
    strategieFrequence1S3: [],
  };
  const validationSchema = Yup.object({
    reductionDosageS3: Yup.array(),
    causeReductionS3: Yup.string(),
    etatPatientControleS3: Yup.string(),
    persistanceS3: Yup.array(),
    complicationS3: Yup.array(),
    persistanceOptionsS3: Yup.array(),
    decesS3: Yup.array(),
    decesOptionS3: Yup.array(),
    hospitalisationS3: Yup.array(),
    avcS3: Yup.array(),
    complicationHemoragiqueS3: Yup.string(),
    traitementS3: Yup.string(),
    traitementOption1S3: Yup.array(),
    traitementOption2S3: Yup.array(),
    traitementOption3S3: Yup.string(),
    anticoagulantOralS3: Yup.string("ce champs doit être alpahnumiérique"),
    antiagrégantPlaquettaireS3: Yup.string(
      "ce champs doit être alpahnumiérique"
    ),
    strategieRythmeS3: Yup.array(),
    strategieRythme1S3: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme2S3: Yup.array(),
    strategieRythme21S3: Yup.string("ce champs doit être alpahnumiérique"),
    strategieRythme3S3: Yup.array(),
    strategieFrequenceS3: Yup.array(),
    strategieFrequence1S3: Yup.array(),
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
      await addingInformationsPatient(user, param, { suivi3: true });
      navigate(`/patientinfo/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const reductionDosageOptions3 = [
    { key: "reduction de dosage", value: "reduction de dosage" },
  ];

  const causeReductionOptionsS3 = [
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
  const traitementRadioOptions3 = [
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
  const strategieRythmeOptions3 = [
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
        <VertiBar number={1} />
        {feildValues && (
          <div className="form">
            <h1>Contrôle à 3 mois</h1>
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
                      name="etatPatientControleS3"
                      options={etatOptions}
                      label="État du patient au contrôle "
                    /> */}
                    <div className="feild">
                      <FormikControl
                        control="checkbox"
                        name="persistanceS3"
                        options={persistanceOptions}
                      />
                      {formik.values.persistanceS3.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="persistanceOptionsS3"
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
                        name="complicationS3"
                        options={complicationOptions}
                      />
                    </div>
                    {formik.values.complicationS3.length !== 0 ? (
                      <div className="child">
                        <div>
                          <FormikControl
                            control="checkbox"
                            name="decesS3"
                            options={decesOptions}
                          />
                          {formik.values.decesS3.length !== 0 ? (
                            <div className="child">
                              <div>
                                <FormikControl
                                  control="checkbox"
                                  name="decesOptionS3"
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
                            name="avcS3"
                            options={avcOptions}
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="radio"
                            name="complicationHemoragiqueS3"
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
                      name="traitementS3"
                      options={traitementOptions}
                      label="Le patient suit un traitemnt anti thrombotique"
                    />
                    {formik.values.traitementS3 === "oui" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption1S3"
                            options={traitementOptionOptions1}
                          />
                          {formik.values.traitementOption1S3.length !== 0 ? (
                            <FormikControl
                              control="select"
                              name="anticoagulantOralS3"
                              options={traitementRadioOptions1}
                            />
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="reductionDosageS3"
                            options={reductionDosageOptions3}
                          />
                          {formik.values.reductionDosageS3.length !== 0 ? (
                            <FormikControl
                              control="radio"
                              name="causeReductionS3"
                              options={causeReductionOptionsS3}
                            />
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption2S3"
                            options={traitementOptionOptions2}
                          />
                          {formik.values.traitementOption2S3.length !== 0 ? (
                            <FormikControl
                              control="radio"
                              name="antiagrégantPlaquettaireS3"
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
                    {formik.values.traitementS3 === "non" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="radio"
                            name="traitementOption3S3"
                            options={traitementRadioOptions3}
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
                        name="strategieRythmeS3"
                        options={strategieRythmeOptions}
                      />
                      {formik.values.strategieRythmeS3.length !== 0 ? (
                        <div className="child">
                          <FormikControl
                            control="radio"
                            name="strategieRythme1S3"
                            options={strategieRythmeOptions1}
                          />
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieRythme2S3"
                              options={strategieRythmeOptions2}
                            />
                            {formik.values.strategieRythme2S3.length !== 0 ? (
                              <div className="child">
                                <FormikControl
                                  control="radio"
                                  name="strategieRythme21S3"
                                  options={strategieRythmeOptions21}
                                />
                              </div>
                            ) : (
                              ""
                            )}
                          </div>

                          <FormikControl
                            control="checkbox"
                            name="strategieRythme3S3"
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
                        name="strategieFrequenceS3"
                        options={strategieFrequenceOptions}
                      />
                      {formik.values.strategieFrequenceS3.length !== 0 ? (
                        <div className="child">
                          <div>
                            <FormikControl
                              control="checkbox"
                              name="strategieFrequence1S3"
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
