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

export default function ECG() {
  const navigate = useNavigate();
  const initialValues = {
    rythme: "",
    dureeOndeP: "",
    dureeQRS: "",
    morphologie: "",
    sokolov: "",
    lewis: "",
    territoireInfractus: "",
    bbg: [],
    bbd: [],
    hvg: [],
    infractus: [],
  };

  const validationSchema = Yup.object({
    rythme: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    dureeOndeP: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    dureeQRS: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    morphologie: Yup.string("ce champs doit être alpahnumiérique").required(
      "ce champs est obligatoire"
    ),
    sokolov: Yup.string("ce champs doit être alpahnumiérique"),
    lewis: Yup.string("ce champs doit être alpahnumiérique"),
    territoireInfractus: Yup.string("ce champs doit être alpahnumiérique"),
    bbg: Yup.array().required("ce champs est obligatoire"),
    bbd: Yup.array().required("ce champs est obligatoire"),
    hvg: Yup.array().required("ce champs est obligatoire"),
    infractus: Yup.array().required("ce champs est obligatoire"),
  });

  const territoireInfractusOptions = [
    { key: "Anterieur", value: "Anterieur" },
    { key: "Inferieur", value: "Inférieur" },
    { key: "Septal", value: "Seeptal" },
    { key: "Lateral", value: "Latéral" },
    { key: "Apical", value: "Apical" },
    { key: "Basal", value: "Basal" },
  ];
  const rythmeOptions = [
    { key: "Sinusal", value: "Sinusal" },
    { key: "FA", value: "FA" },
    { key: "Flutter", value: "Flutter" },
    { key: "Electro-stimulé", value: "Electro-stimulé" },
  ];
  const BBGOptions = [{ key: "BBG", value: "bbg" }];
  const BBDOptions = [{ key: "BBD", value: "bbd" }];
  const HVGOptions = [{ key: "HVG", value: "hvg" }];
  const InfractusOptions = [{ key: "Infractus", value: "infractus" }];

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
      navigate(`/ett/${param.idpatient}`);
    });
    return unsubscribe;
  };

  return (
    <StyledDiv>
      <NavTop />
      <Title title="inscription d'un patient" />
      <Horibar number={2} />
      <div className="form-container">
        <VertiBar number={1} />
        {feildValues && (
          <div className="form">
            <h1>ECG</h1>
            <Formik
              initialValues={feildValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="myLabel">Rythme</div>
                  <div className="field first">
                    <FormikControl
                      control="radio"
                      type="text"
                      name="rythme"
                      options={rythmeOptions}
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="input"
                      type="text"
                      name="dureeOndeP"
                      placeholder=""
                      width="300px"
                      label="Durée onde P"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="input"
                      type="text"
                      name="dureeQRS"
                      placeholder=""
                      width="300px"
                      label="Durée du QRS"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="input"
                      type="text"
                      name="morphologie"
                      placeholder=""
                      width="300px"
                      label="Morphologie"
                    />
                  </div>

                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="bbg"
                      options={BBGOptions}
                    />
                    <FormikControl
                      control="checkbox"
                      name="bbd"
                      options={BBDOptions}
                    />
                  </div>

                  <FormikControl
                    control="checkbox"
                    name="hvg"
                    options={HVGOptions}
                  />
                  {formik.values.hvg.length !== 0 ? (
                    <div className="field first">
                      <FormikControl
                        control="input"
                        name="sokolov"
                        width="150px"
                        label="Sokolov"
                        placeholder="mm"
                      />
                      <FormikControl
                        control="input"
                        name="lewis"
                        width="150px"
                        label="Lewis"
                        placeholder="mm"
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="field">
                    <FormikControl
                      control="checkbox"
                      name="infractus"
                      options={InfractusOptions}
                    />
                  </div>

                  {formik.values.infractus.length !== 0 ? (
                    <div>
                      <div className="field first">
                        <FormikControl
                          control="radio"
                          name="infractusTerritoire"
                          options={territoireInfractusOptions}
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

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
        &.first {
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
