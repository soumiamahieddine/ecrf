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

export default function TraitementAnterieurFA() {
  const navigate = useNavigate();
  const initialValues = {
    traitementMedical: [],
    traitementMedicalAnterieurFaType1: [],
    traitementMedicalAnterieurFaType2: [],
    antecedentCardioversion: [],
    antecedentAblation: [],
    implantationPaceMaker: [],
  };
  const validationSchema = Yup.object({
    traitementMedical: Yup.array().required("ce champs est obligatoire"),
    traitementMedicalAnterieurFaType1: Yup.array().required(
      "ce champs est obligatoire"
    ),
    traitementMedicalAnterieurFaType2: Yup.array().required(
      "ce champs est obligatoire"
    ),
    antecedentCardioversion: Yup.array().required("ce champs est obligatoire"),
    antecedentAblation: Yup.array().required("ce champs est obligatoire"),
    implantationPaceMaker: Yup.array().required("ce champs est obligatoire"),
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
      navigate(`/ecg/${param.idpatient}`);
    });
    return unsubscribe;
  };

  const traitementMedicalAnterieurFaType1Options = [
    {
      key: "Traitement ralentisseur",
      value: "Traitement ralentisseur",
    },
  ];

  const traitementMedicalAnterieurFaType2Options = [
    {
      key: "Traitement arythmique",
      value: "Traitement arythmique",
    },
  ];

  const traitementOptions = [
    {
      key: "Traitement Medical",
      value: "Traitement Medical",
    },
  ];
  const antecendentCardioOptions = [
    {
      key: "Antécédent de cardioversion",
      value: "Antécédent de cardioversion",
    },
  ];
  const antecedentAblationOptions = [
    { key: "Antécédent d'Ablation", value: "Antécédent d'Ablation" },
  ];
  const implantationPaceMakerOptions = [
    { key: "Implantation de PaceMaker", value: "Implantation de PaceMaker" },
  ];
  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={7} />
        {feildValues && (
          <div className="form">
            <h1>Traitement Antérieur de La FA</h1>
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
                      name="traitementMedical"
                      options={traitementOptions}
                    />
                  </div>

                  {formik.values.traitementMedical.length !== 0 ? (
                    <div className="child">
                      <FormikControl
                        className="child"
                        control="checkbox"
                        name="traitementMedicalAnterieurFaType1"
                        options={traitementMedicalAnterieurFaType1Options}
                      />
                      <FormikControl
                        className="child"
                        control="checkbox"
                        name="traitementMedicalAnterieurFaType2"
                        options={traitementMedicalAnterieurFaType2Options}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <FormikControl
                    control="checkbox"
                    name="antecedentCardioversion"
                    options={antecendentCardioOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="antecedentAblation"
                    options={antecedentAblationOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="implantationPaceMaker"
                    options={implantationPaceMakerOptions}
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
