import React from "react";
import NavTop from "../../components/NavTop";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/FormikControl";
import NiceButton from "../../components/NiceButton";

export default function AddDoctor() {
  const sexeOptions = [
    { key: "Homme", value: "homme" },
    { key: "Femme", value: "femme" },
  ];
  const residenceOptions = [
    { key: "", value: "" },
    { key: "Alger", value: "alger" },
    { key: "Constantine", value: "constantine" },
    { key: "Oran", value: "oran" },
    { key: "Annaba", value: "Annaba" },
    { key: "isser", value: "isser" },
  ];
  const initialValues = {
    nom: "",
    prenom: "",
    sexe: "",
    wilaya: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required(),
    prenom: Yup.string().required(),
    sexe: Yup.string().required(),
    wilaya: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (values) => console.log(values);

  return (
    <StyledDiv>
      <NavTop />
      <PageTitle title="Ajout d'un médecin" isStat={true} />
      <div className="form-container">
        <div className="form">
          <h1 className="headerTitle">Création d'un compte médecin</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              console.log(formik);
              return (
                <Form>
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="nom"
                      placeholder="Nom"
                    />
                  </div>
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="prenom"
                      placeholder="Prénom"
                    />
                  </div>

                  <FormikControl
                    control="radio"
                    name="sexe"
                    label="Sexe"
                    options={sexeOptions}
                  />
                  <FormikControl
                    control="select"
                    name="residence"
                    label="Résidence"
                    width="300px"
                    options={residenceOptions}
                  />
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="email"
                      placeholder="Email du médecin"
                    />
                  </div>
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="password"
                      placeholder="Mot de passe"
                      type="password"
                    />
                  </div>
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="confirmPassword"
                      placeholder="Confirmer mot de passe"
                      type="password"
                    />
                  </div>
                  <div className="button-container">
                    <NiceButton title="Créer médecin" />
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
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
  .form {
    margin: 2rem 3rem;
  }
  .headerTitle {
    margin-bottom: 1rem;
  }
`;
