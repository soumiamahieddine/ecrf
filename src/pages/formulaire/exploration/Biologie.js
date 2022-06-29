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
import VertiBar from "../../../components/vertiBar2";
import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";

export default function ECG() {
  const navigate = useNavigate();
  const initialValues = {
    GB: "",
    plaquettes: "",
    uree: "",
    creatininemie: "",
    NAplus: "",
    Kplus: "",
    TP: "",
    glycemie: "",
    triglycerides: "",
    cholesterolTotal: "",
    TSH: "",
  };

  const validationSchema = Yup.object({
    GB: Yup.string(),
    plaquettes: Yup.string(),
    uree: Yup.string(),
    creatininemie: Yup.string(),
    NAplus: Yup.string(),
    Kplus: Yup.string(),
    TP: Yup.string(),
    glycemie: Yup.string(),
    triglycerides: Yup.string(),
    cholesterolTotal: Yup.string(),
    TSH: Yup.string(),
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
      navigate(`/traitementAntiThrombotique/${param.idpatient}`);
    });
    return unsubscribe;
  };

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={2} />
      <div className="form-container">
        <VertiBar number={3} />
        {feildValues && (
          <div className="form">
            <h1>Biologie</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="GB"
                      unit="e/mm3"
                      width="100px"
                      label="GB"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="plaquettes"
                      unit="e/mm3"
                      width="100px"
                      label="plaquettes"
                    />
                  </div>
                  <div className="field gap">
                    {" "}
                    <FormikControl
                      control="input"
                      type="text"
                      name="uree"
                      unit="g/L"
                      width="100px"
                      label="Urée"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="creatininemie"
                      unit="mg/L"
                      width="100px"
                      label="creatininemie"
                    />
                  </div>
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="NAplus"
                      unit="mmol/L"
                      width="100px"
                      label="NA+ "
                    />{" "}
                    <FormikControl
                      control="input"
                      type="text"
                      name="Kplus"
                      unit="mmol/L"
                      width="100px"
                      label="K+ "
                    />
                  </div>
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="TP"
                      unit=""
                      width="100px"
                      label="INR"
                    />
                  </div>
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="glycemie"
                      unit="g/L"
                      width="100px"
                      label="glycemie"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="triglycerides"
                      width="100px"
                      label="HB A1C"
                    />
                  </div>

                  <div className="field gap">
                    {" "}
                    <FormikControl
                      control="input"
                      type="text"
                      name="cholesterolTotal"
                      width="100px"
                      label="LDLC"
                    />
                  </div>

                  <div className="field gap">
                    {" "}
                    <FormikControl
                      control="input"
                      type="text"
                      name="TSH"
                      unit="mUI/L"
                      width="100px"
                      label="TSH"
                    />
                  </div>
                  <div className="button-container">
                    <PrevButton
                      type="button"
                      onClick={() => {
                        navigate(-1);
                      }}
                      title="Précedent"
                    />
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
  width: 79vw;

  height: 100vh;
  /* .formControl {
    margin-bottom: 20px;
  } */
  .myLabel {
    color: #a8a7a7;
  }
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
        align-items: flex-start;
        margin-bottom: 10px;
        &.gap {
          gap: 1rem;
        }
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
