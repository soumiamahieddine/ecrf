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

export default function ETT() {
  const navigate = useNavigate();
  const initialValues = {
    masseVG: "",
    FEVG: "",
    fonctionDiastolique: "",
    volumeOG: "",
    TDE: "",
    IMFonctionnelle: [],
    gradeIM: "",
    SOR: "",
    VR: "",
    thrombusIntraAuriculaire: [],
    SVD: "",
    TAPSE: "",
    ITFonctionnelle: [],
    gradeIT: "",
    surfaceOD: "",
    PAPS: "",
    VCI: "",
  };

  const validationSchema = Yup.object({
    masseVG: Yup.string().required("ce champs est obligatoire"),
    FEVG: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    fonctionDiastolique: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
    volumeOG: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    TDE: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    IMFonctionnelle: Yup.array(),
    thrombusIntraAuriculaire: Yup.array(),
    gradeIM: Yup.string("ce champs doit être alpahnumiérique"),
    SOR: Yup.string("ce champs doit être alpahnumiérique"),
    VR: Yup.string("ce champs doit être alpahnumiérique"),
    trombusIntraAuriculaire: Yup.array(),
    SVD: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    TAPSE: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    ITFonctionnelle: Yup.array(),
    gradeIT: Yup.string("ce champs doit être alpahnumiérique"),
    surfaceOD: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    PAPS: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    VCI: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
  });

  const IMFonctionnelleOptions = [{ key: "Oui", value: "oui" }];
  const ITFonctionnelleOptions = [{ key: "Oui", value: "oui" }];
  const trombusIntraAuriculaireOptions = [{ key: "Oui", value: "oui" }];

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
                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="masseVG"
                      placeholder="g/m²"
                      width="100px"
                      label="Masse VG"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="FEVG"
                      placeholder="%"
                      width="100px"
                      label="FEVG"
                    />
                  </div>

                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="fonctionDiastolique"
                      placeholder="E/é"
                      width="150px"
                      label="Fonction diastolique"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="volumeOG"
                      placeholder=""
                      width="150px"
                      label="Volume de l'OG"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="TDE"
                      placeholder="ms"
                      width="150px"
                      label="TDE"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="IMFonctionnelle"
                      options={IMFonctionnelleOptions}
                      label="IM Fonctionnelle"
                    />
                  </div>

                  {formik.values.IMFonctionnelle.length !== 0 ? (
                    <div className="field gap">
                      <FormikControl
                        control="input"
                        name="gradeIM"
                        width="150px"
                        label="Grade"
                      />
                      <FormikControl
                        control="input"
                        name="SOR"
                        width="150px"
                        label="SOR"
                        placeholder="cm²"
                      />
                      <FormikControl
                        control="input"
                        name="VR"
                        width="150px"
                        label="VR"
                        placeholder="mL"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="field">
                    <FormikControl
                      control="checkbox"
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
                      name="SVD"
                      placeholder="m/s"
                      width="150px"
                      label="SVD"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="TAPSE"
                      placeholder="mm"
                      width="150px"
                      label="TAPSE"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="ITFonctionnelle"
                      options={ITFonctionnelleOptions}
                      label="IT Fonctionnelle"
                    />
                  </div>
                  {formik.values.ITFonctionnelle.length !== 0 ? (
                    <div className="field">
                      <FormikControl
                        control="input"
                        name="gradeIT"
                        width="150px"
                        label="Grade"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="field gap">
                    <FormikControl
                      control="input"
                      type="text"
                      name="surfaceOD"
                      placeholder="cm²"
                      width="100px"
                      label="Surface OD"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="PAPS"
                      placeholder="mmHG"
                      width="100px"
                      label="PAPS"
                    />
                    <FormikControl
                      control="input"
                      type="text"
                      name="VCI"
                      placeholder="mm"
                      width="100px"
                      label="VCI"
                    />
                  </div>

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
