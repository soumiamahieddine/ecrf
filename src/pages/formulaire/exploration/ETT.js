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

export default function ETT() {
  const navigate = useNavigate();
  const initialValues = {
    masseVG: "",
    FEVG: "",
    volumeOG: "",
    thrombusIntraAuriculaire: "",
    surfaceOD: "",
    PAPS: "",
  };

  const validationSchema = Yup.object({
    masseVG: Yup.string().required("ce champs est obligatoire"),
    FEVG: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    volumeOG: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    thrombusIntraAuriculaire: Yup.string().required(
      "ce champs est obligatoire"
    ),

    surfaceOD: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    PAPS: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
  });

  const trombusIntraAuriculaireOptions = [
    { key: "Oui", value: "oui" },
    { key: "Non", value: "non" },
  ];
  const masseFGOptionOptions = [
    { key: "Oui", value: "oui" },
    { key: "non", value: "non" },
  ];

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
      navigate(`/biologie/${param.idpatient}`);
    });
    return unsubscribe;
  };

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={2} />
      <div className="form-container">
        <VertiBar number={2} />
        {feildValues && (
          <div className="form">
            <h1>ETT</h1>
            <h2>Analyse coeur gauche</h2>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="field">
                    <FormikControl
                      control="radio"
                      name="masseVG"
                      options={masseFGOptionOptions}
                      label="Masse VG"
                    />
                  </div>
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="FEVG"
                      unit="%"
                      width="100px"
                      label="FEVG"
                    />
                  </div>

                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="volumeOG"
                      placeholder=""
                      width="150px"
                      label="Volume de l'OG"
                      unit="mml/m² (de surface corporelle)"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="radio"
                      name="thrombusIntraAuriculaire"
                      options={trombusIntraAuriculaireOptions}
                      label="Thrombus Intra Auriculaire"
                    />
                  </div>

                  <h2>Analyse coeur droite</h2>

                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="surfaceOD"
                      unit="cm²"
                      width="100px"
                      label="Surface OD"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="PAPS"
                      unit="mmHG"
                      width="100px"
                      label="PAPS"
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
