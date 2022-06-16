import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  auth,
  addingInformationsPatient,
  firestore,
} from "../../../firebase/firebase.utils";
import { features } from "../../../data/wilayas.json";

import FormikControl from "../../../components/FormikControl";

import NavTop from "../../../components/NavTop";
import Title from "../../../components/Inscreptiontitle";
import Horibar from "../../../components/Horibar";
import VertiBar from "../../../components/VertiBar";
import NextButton from "../../../components/NextButton";
import { useNavigate, useParams } from "react-router-dom";

export default function DonnéesDémograghiques() {
  const navigate = useNavigate();
  const param = useParams();
  const circonstanceOptions = [
    { key: "Consultation", value: "consultation" },
    { key: "Urgence", value: "urgence" },
    { key: "Hospitalisation", value: "hospitalisation" },
  ];
  const situationOptions = [
    { key: "Célibataire", value: "celibataire" },
    { key: "Marié(e)", value: "marié(e)" },
    { key: "Divorcé(e)", value: "divorcé(e)" },
    { key: "Veuf(ve)", value: "veuf(ve)" },
  ];
  const sexeOptions = [
    { key: "Homme", value: "homme" },
    { key: "Femme", value: "femme" },
  ];

  const assuranceOptions = [
    { key: "Assuré(e)", value: "assuré(e)" },
    { key: "Non-assuré(e)", value: "non-assuré(e)" },
  ];
  const niveauOptions = [
    { key: "", value: "" },
    { key: "groupe 1", value: "groupe 1" },
    { key: "groupe 2", value: "groupe 2" },
    { key: "groupe 3", value: "groupe 3" },
    { key: "groupe 4", value: "groupe 4" },
  ];

  const initialValues = {
    circonstance: "",
    sexe: "",
    birthDate: "",
    nom: "",
    residence: "",
    situationFamiliale: "",
    assurance: "",
    niveau: "",
    num: "",
    num2: "",
  };
  const validationSchema = Yup.object({
    circonstance: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    sexe: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    birthDate: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    nom: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    residence: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    situationFamiliale: Yup.string(
      "ce champs doit être alpahnumiérique"
    ).required("ce champs est obligatoire"),
    assurance: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    niveau: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    num: Yup.string("ce champs doit être alpahnumiérique"),
    num2: Yup.string("ce champs doit être alpahnumiérique"),
  });

  const [wilayas, setWilayas] = useState([]);
  const [residenceOptions, setResidenceOptions] = useState([]);
  useEffect(() => {
    setWilayas(features.map((features) => features.properties.name).sort());
  }, []);
  useEffect(() => {
    wilayas.unshift("");
    setResidenceOptions(
      wilayas.map((wilaya) => ({ key: wilaya, value: wilaya }))
    );
  }, [wilayas]);

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

  const onSubmit = (values) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      await addingInformationsPatient(user, param, values);
      navigate(`/motifDAdmission/${param.idpatient}`);
    });
    return unsubscribe;
  };
  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={1} />
      <div className="form-container">
        <VertiBar number={1} />
        {feildValues && (
          <div className="form">
            <h1>Données démographiques</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    name="nom"
                    label="Nom et Prénom"
                    placeholder="Nom et Prénom"
                    width="400px"
                  />

                  <FormikControl
                    control="radio"
                    name="circonstance"
                    label="Circonstance d'inclusion"
                    options={circonstanceOptions}
                  />
                  <FormikControl
                    control="radio"
                    name="sexe"
                    label="sexe"
                    options={sexeOptions}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="birthDate"
                    label="Année de naissance"
                    placeholder="année"
                    width="100px"
                  />
                  <FormikControl
                    control="select"
                    name="residence"
                    label="Résidence"
                    width="200px"
                    options={residenceOptions}
                  />
                  <FormikControl
                    control="radio"
                    name="situationFamiliale"
                    label="Situation Familiale"
                    options={situationOptions}
                  />
                  <FormikControl
                    control="radio"
                    name="assurance"
                    label="Assurance"
                    options={assuranceOptions}
                  />
                  <FormikControl
                    control="select"
                    name="niveau"
                    label="Niveau socio-économique"
                    width="130px"
                    options={niveauOptions}
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="num"
                    label="Numéro de téléphone"
                    placeholder="+213 xx xx xx xx xx "
                    width="180px"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="num2"
                    label="Numéro de téléphone du parent"
                    placeholder="+213 xx xx xx xx xx "
                    width="180px"
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
