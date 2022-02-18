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

export default function Evaluation() {
  const navigate = useNavigate();
  const initialValues = {
    scoreCHAD: "",
    scoreHasBled: "",
  };
  const validationSchema = Yup.object({
    scoreCHAD: Yup.string().required("ce champs est obligatoire"),
    scoreHasBled: Yup.string("ce champs doit être alpahnumiérique"),
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
      navigate(`/traitementAnterieurFA/${param.idpatient}`);
    });
    return unsubscribe;
  };

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

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={7} />
        {feildValues && (
          <div className="form">
            <h1>Evaluation</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
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
                    <NextButton type="submit" disabled={formik.isSubmitting} />
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
        align-items: center;
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
