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
import VertiBar from "../../../components/Vertibar3";
import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";

export default function TraitementAntiThrombotique() {
  const navigate = useNavigate();
  const initialValues = {
    traitement: "",
    traitementOption1: [],
    traitementOption2: [],
    traitementOption3: "",
    anticoagulantOral: "",
    antiagrégantPlaquettaire: "",
  };
  const validationSchema = Yup.object({
    traitement: Yup.string(),
    traitementOption1: Yup.array(),
    traitementOption2: Yup.array(),
    traitementOption3: Yup.string(),
    anticoagulantOral: Yup.string("ce champs doit être alpahnumiérique"),
    antiagrégantPlaquettaire: Yup.string("ce champs doit être alpahnumiérique"),
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
      navigate(`/traitementDeLaFA/${param.idpatient}`);
    });
    return unsubscribe;
  };
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

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={3} />
      <div className="form-container">
        <VertiBar number={1} />
        {feildValues && (
          <div className="form">
            <h1>Traitement Antithrombotique</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div>
                    <FormikControl
                      control="radio"
                      name="traitement"
                      options={traitementOptions}
                      label="Le patient suit un traitemnt anti thrombotique"
                    />
                    {formik.values.traitement === "oui" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption1"
                            options={traitementOptionOptions1}
                          />
                          {formik.values.traitementOption1.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="select"
                                name="anticoagulantOral"
                                options={traitementRadioOptions1}
                              />{" "}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="field">
                          <FormikControl
                            control="checkbox"
                            name="traitementOption2"
                            options={traitementOptionOptions2}
                          />
                          {formik.values.traitementOption2.length !== 0 ? (
                            <div className="child">
                              <FormikControl
                                control="radio"
                                name="antiagrégantPlaquettaire"
                                options={traitementRadioOptions2}
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
                    {formik.values.traitement === "non" ? (
                      <div className="child">
                        <div className="field">
                          <FormikControl
                            control="radio"
                            name="traitementOption3"
                            options={traitementRadioOptions3}
                            label="Pour quelle raison ?"
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

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
