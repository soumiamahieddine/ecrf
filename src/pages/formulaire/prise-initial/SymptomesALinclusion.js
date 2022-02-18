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

export default function SymptomesALinclusion() {
  const navigate = useNavigate();
  const initialValues = {
    symptomeFA: "",
    symptomes: [],
    severitéSymptome: "",
  };
  const validationSchema = Yup.object({
    symptomeFA: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    symptomes: Yup.array().required("ce champs est obligatoire"),
    severitéSymptome: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
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
      navigate(`/pathologiesAssociees/${param.idpatient}`);
    });
    return unsubscribe;
  };
  const symptomeFAOptions = [
    {
      key: "Asymptomatique",
      value: "asymptomatique ",
    },
    {
      key: "Symptômes non liés à la FA",
      value: "Symptômes non liés à la FA",
    },
    {
      key: "Symptômes liés à la FA",
      value: "Symptômes liés à la FA",
    },
  ];
  const symptomesOptions = [
    { key: "Dyspnée", value: "Dyspnée" },
    { key: "Asthénie", value: "Asthénie" },
    { key: "Douleurs thoraciques", value: "Douleurs thoraciques" },
    { key: "Palpitations", value: "Palpitations" },
    { key: "Syncope ou lipothymie", value: "Syncope ou lipothymie" },
  ];
  const severitéSymptomeOptions = [
    { key: "1", value: "1" },
    { key: "2a", value: "2a" },
    { key: "2b", value: "2b" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
  ];

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={3} />
        {feildValues && (
          <div className="form">
            <h1>Symptômes à l'inclusion</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control="radio"
                    label="Quels symptômes à l’inclusion du patient ?"
                    name="symptomeFA"
                    options={symptomeFAOptions}
                  />
                  <FormikControl
                    control="checkbox"
                    name="symptomes"
                    options={symptomesOptions}
                    label="Symptomes liés à la FA"
                  />
                  <FormikControl
                    control="radio"
                    name="severitéSymptome"
                    label="Sévérité des symptômes (score EHRA)"
                    options={severitéSymptomeOptions}
                  />

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
