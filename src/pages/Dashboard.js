import React, { useEffect, useState } from "react";
import NavTop from "../components/NavTop";
import styled from "styled-components";
import DashboardButton from "../components/DashboardButton";
import plus from "../img/PlusLogo.svg";
import modify from "../img/modify.svg";
import { enGB } from "date-fns/locale";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./style.scss";
import HistListPatients from "./HistListPatients";
import Covid19 from "../components/WilayasData";
import Title from "../components/PageTitle";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase/firebase.utils";
import { serverTimestamp } from "firebase/firestore";

export default function Dashboard() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date("2022-01-25");
  const [focus, setFocus] = useState(START_DATE);
  const [ref, setRef] = useState(null);

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  const navigate = useNavigate();
  const addPatient = async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const createdAt = new Date();
        const created = JSON.stringify(
          createdAt.getDate() +
            "/" +
            (createdAt.getMonth() + 1) +
            "/" +
            createdAt.getFullYear()
        );
        const patientsRef = firestore.collection(
          `medecins/${user.uid}/patients/`
        );

        try {
          const patientRef = await patientsRef.add({
            createdAt: created,
            timestamp: serverTimestamp(),
            circonstance: "",
            sexe: "",
            age: "",
            nom: "",
            residence: "",
            situationFamiliale: "",
            assurance: "",
            niveau: "",
            num: "",
            antecedent: [],
            evenementHemoragiqueMajeur: [],
            cancer: [],
            pathologieVasculaire: [],
            bmi: "",
            htaDate: "",
            hta: [],
            diabete: [],
            diabeteDate: "",
            dyslipidemie: [],
            dyslipidemieDate: "",
            tabagisme: "",
            consommationAlcool: "",
            sedentarite: [],
            circonstance1: [],
            circonstance2: [],
            episodeFA: "",
            episodeFADate: "",
            typeFA: "",
            coronaropathie: [],
            valvupathies: [],
            cardiomyopathieHypertrophique: [],
            cardiomyoathieDilatee: [],
            autreMaladie: [],
            autreMaladieDate: "",
            sas: [],
            dysthyroidie: [],
            insuffisanceRenaleChronique: [],
            symptomeFA: "",
            symptomes: [],
            severitéSymptome: "",
            traitementMedical: [],
            traitementMedicalInput: "",
            antecedentCardioversion: [],
            antecedentAblation: [],
            implantationPaceMaker: [],
            iec: [],
            iecDate: "",
            betabloquant: [],
            betabloquantDate: "",
            diurétiqueAnse: [],
            diurétiqueAnseDate: "",
            diurétiqueThiazidique: [],
            diurétiqueThiazidiqueDate: "",
            aldosterone: [],
            aldosteroneDate: "",
            statine: [],
            statineDate: "",
            antiDiabetiqueOraux: [],
            insuline: [],
            hormonesThyroidiennes: [],
            traitement: "",
            traitementOption1: [],
            traitementOption2: [],
            traitementOption3: "",
            anticoagulantOral: "",
            antiagrégantPlaquettaire: "",
            strategieRythme: [],
            strategieRythme1: "",
            strategieRythme2: [],
            strategieRythme3: [],
            strategieRythme21: "",
            strategieFrequence: [],
            strategieFrequence1: [],
            strategieFrequence11: "",
            dureeOndeP: "",
            dureeQRS: "",
            morphologie: "",
            sokolov: "",
            lewis: "",
            rythme: "",
            territoireInfractus: "",
            bbg: [],
            bbd: [],
            hvg: [],
            infractus: [],
            FNS: "",
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
            ASAT: "",
            ALAT: "",
            bilirubineTotal: "",
            TSH: "",
            BNP: "",
            troponines: "",
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
            scoreCHAD: "",
            scoreHasBled: "",
          });
          setRef(patientRef);
        } catch (error) {
          console.log("error creating user", error.message);
        }
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    if (ref) {
      navigate(`/donneesDemograghiques/${ref.id}`);
    }
  }, [ref]);

  return (
    <StyledDiv>
      <NavTop />
      <Title isStat title="Dashboard" />
      <div className="widgets">
        <div id="firstWidget" className=" widget">
          <div className="buttons">
            <DashboardButton
              onClick={async () => {
                await addPatient();
              }}
              imgName={plus}
              name="Ajouter un Patient"
            />
            <DashboardButton
              imgName={modify}
              name="Modifier un Patient"
              onClick={() => {
                navigate("/listPatients");
              }}
            />
          </div>
          <div className="datePickerWrapper date-input-field">
            <DateRangePickerCalendar
              startDate={startDate}
              endDate={endDate}
              focus={focus}
              onFocusChange={handleFocusChange}
              locale={enGB}
            />
          </div>
        </div>
        <div className="widget widgetOther">
          <Covid19 />
        </div>
        <div
          className="widget widgetOther historique"
          onClick={() => {
            navigate("/listPatients");
          }}
        >
          <HistListPatients />
        </div>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 80vw;
  height: 100vh;

  .widgets {
    display: flex;
    margin: 2rem 5rem;
    justify-content: space-between;
  }
  .widget {
    flex: 1 1 45rem;
    height: 70vh;
    margin: 2rem 1rem;
  }
  .widgetOther {
    height: 70vh;
    border: solid 2px #243153;
    border-radius: 25px;
    overflow: hidden;

    &.historique {
      cursor: pointer;
    }
  }

  .datePickerWrapper {
  }
  #firstWidget {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .buttons {
    margin-bottom: 1rem;
  }
`;
