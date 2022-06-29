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
            birthDate: "",
            nom: "",
            residence: "",
            situationFamiliale: "",
            assurance: "",
            niveau: "",
            num: "",
            num2: "",
            antecedent: [],
            evenementHemoragiqueMajeur: [],
            cancer: [],
            pathologieVasculaire: [],
            taille: "",
            poids: "",
            htaDate: "",
            hta: [],
            diabete: [],
            diabeteDate: "",
            dyslipidemie: [],
            dyslipidemieDate: "",
            tabagisme: "",
            consommationAlcool: "",
            sedentarite: "",
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
            dysthyroidieType: "",
            insuffisanceRenaleChronique: [],
            symptomeFA: "",
            symptomes: [],
            severitéSymptome: "",
            traitementMedical: [],
            traitementMedicalAnterieurFaType1: [],
            traitementMedicalAnterieurFaType2: [],
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
            intervalQT: "",
            //sokolov: "",
            //lewis: "",
            frequenceCardiaque: "",
            rythme: "",
            territoireInfractus: "",
            bbg: "",
            //bbd: [],
            hvg: [],
            infractus: [],
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
            masseVG: "",
            FEVG: "",
            volumeOG: "",
            thrombusIntraAuriculaire: "",
            surfaceOD: "",
            PAPS: "",
            scoreCHAD: "",
            scoreHasBled: "",
            suivi3: false,
            suivi6: false,
            suivi12: false,
            reductionDosageS3: [],
            causeReductionS3: "",
            reductionDosageS6: [],
            causeReductionS6: "",
            reductionDosageS12: [],
            causeReductionS12: "",
            etatPatientControleS3: "",
            persistanceS3: [],
            persistanceOptionsS3: [],
            complicationS3: [],
            decesS3: [],
            decesOptionS3: [],
            hospitalisationS3: [],
            avcS3: [],
            complicationHemoragiqueS3: "",
            traitementS3: "",
            traitementOption1S3: [],
            traitementOption2S3: [],
            traitementOption3S3: "",
            anticoagulantOralS3: "",
            antiagrégantPlaquettaireS3: "",
            strategieRythmeS3: [],
            strategieRythme1S3: "",
            strategieRythme2S3: [],
            strategieRythme3S3: [],
            strategieRythme21S3: "",
            strategieFrequenceS3: [],
            strategieFrequence1S3: [],
            etatPatientControleS6: "",
            persistanceS6: [],
            persistanceOptionsS6: [],
            complicationS6: [],
            decesS6: [],
            decesOptionS6: [],
            hospitalisationS6: [],
            avcS6: [],
            complicationHemoragiqueS6: "",
            traitementS6: "",
            traitementOption1S6: [],
            traitementOption2S6: [],
            traitementOption3S6: "",
            anticoagulantOralS6: "",
            antiagrégantPlaquettaireS6: "",
            strategieRythmeS6: [],
            strategieRythme1S6: "",
            strategieRythme2S6: [],
            strategieRythme3S6: [],
            strategieRythme21S6: "",
            strategieFrequenceS6: [],
            strategieFrequence1S6: [],
            etatPatientControleS12: "",
            persistanceS12: [],
            persistanceOptionsS12: [],
            complicationS12: [],
            decesS12: [],
            decesOptionS12: [],
            hospitalisationS12: [],
            avcS12: [],
            complicationHemoragiqueS12: "",
            traitementS12: "",
            traitementOption1S12: [],
            traitementOption2S12: [],
            traitementOption3S12: "",
            anticoagulantOralS12: "",
            antiagrégantPlaquettaireS12: "",
            strategieRythmeS12: [],
            strategieRythme1S12: "",
            strategieRythme2S12: [],
            strategieRythme3S12: [],
            strategieRythme21S12: "",
            strategieFrequenceS12: [],
            strategieFrequence1S12: [],
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
              imgName={"fa-solid fa-circle-plus"}
              name="Ajouter un Patient"
            />
            <DashboardButton
              imgName={"fa-solid fa-pen"}
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
        {/* <div className="widget widgetOther">
          <Covid19 />
        </div> */}
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
  width: 79vw;
  height: 100vh;

  .widgets {
    display: flex;
    margin: 2rem 5rem;
    justify-content: space-around;
  }
  .widget {
    width: 100%;
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
