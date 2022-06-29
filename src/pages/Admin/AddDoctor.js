import React from "react";
import NavTop from "../../components/NavTop";
import styled from "styled-components";
import PageTitle from "../../components/PageTitle";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/FormikControl";
import NiceButton from "../../components/NiceButton";
import { app2, createUserProfilDocument } from "../../firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import formikControl from "../../components/FormikControl";

export default function AddDoctor() {
  const sexeOptions = [
    { key: "Homme", value: "homme" },
    { key: "Femme", value: "femme" },
  ];
  const typeOptions = [
    { key: "admin", value: "admin" },
    { key: "medecin", value: "medecin" },
  ];
  const secteurOptions = [
    { key: "Publique", value: "Publique" },
    { key: "Liberal", value: "Liberal" },
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
    secteur: "",
    sexe: "",
    residence: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
  };

  const validationSchema = Yup.object({
    nom: Yup.string().required("Ce champs est obligatoire"),
    sexe: Yup.string().required("Ce champs est obligatoire"),
    secteur: Yup.string().required("Ce champs est obligatoire"),
    residence: Yup.string().required("Ce champs est obligatoire"),
    email: Yup.string().required("Ce champs est obligatoire"),
    password: Yup.string().required("Ce champs est obligatoire"),
    confirmPassword: Yup.string()
      .required("Ce champs est obligatoire")
      .oneOf([Yup.ref("password"), null], "Mot de passe incorrect"),
    type: Yup.string().required("Ce champs est obligatoire"),
  });

  const onSubmit = ({
    email,
    password,
    sexe,
    residence,
    nom,
    type,
    secteur,
  }) => {
    app2
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (user) => {
        user.user.updateProfile({
          displayName: nom,
        });
        await createUserProfilDocument(user.user, type, {
          nom,
          sexe,
          residence,
          secteur,
        });
        notify();
        app2.auth().signOut();
        //window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);

        if (error.code == "auth/email-already-in-use") {
          notifyInUse();
        } else if (error.code == "auth/invalid-email") {
          notifyInvalid();
        } else if (error.code == "auth/operation-not-allowed") {
          notifyNotAllowed();
        } else if (error.code == "auth/weak-password") {
          notifyWeakPassword();
        }
      });
  };

  const notify = () => {
    toast.success(`Medecin ajouté avec succès`);
  };
  const notifyInUse = () => {
    toast.error(`Cet email existe déja`);
  };
  const notifyInvalid = () => {
    toast.error(`Cet email est invalide`);
  };
  const notifyNotAllowed = () => {
    toast.error(`Une erreur s'est produite`);
  };
  const notifyWeakPassword = () => {
    toast.error(`Mot de passe trés court`);
  };

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
              return (
                <Form>
                  <div className="field">
                    <FormikControl
                      width="300px"
                      control="input"
                      name="nom"
                      placeholder="Nom et prénom"
                    />
                  </div>

                  <FormikControl
                    control="radio"
                    name="type"
                    label="type"
                    options={typeOptions}
                  />

                  <FormikControl
                    control="radio"
                    name="secteur"
                    label="secteur"
                    options={secteurOptions}
                  />

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
                    <NiceButton title="Créer médecin" type="submit" />
                    <ToastContainer />
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
  width: 79vw;
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
