import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavTop from "../components/NavTop";
import Title from "../components/Inscreptiontitle";
import ListPatientsItem from "../components/ListPatientsItem";
import { auth, firestore } from "../firebase/firebase.utils";
import { CSVLink, CSVDownload } from "react-csv";
export default function ListPatientsAdmin() {
  const navigate = useNavigate();
  const param = useParams();
  const date = new Date().getFullYear();
  const [list, setList] = useState([]);
  const headers = [
    { label: "Nom et Prénom", key: "nom" },
    { label: "Créé le", key: "createdAt" },
    { label: "Circonstance d'inclusion", key: "circonstance" },
    { label: "Sexe", key: "sexe" },
    { label: "Age", key: "age" },
    { label: "Date de naissance", key: "birthDate" },
    { label: "Residence", key: "residence" },
    { label: "Situation familiale", key: "situationFamiliale" },
    { label: "Assurance", key: "assurance" },
    { label: "Niveau", key: "niveau" },
    { label: "Numero de téléphone", key: "num" },
    { label: "Numero de téléphone du parent", key: "num2" },
    { label: "Circonstance de la FA", key: "circonstance1" },
    { label: "Complication", key: "circonstance2" },
    { label: "Premier épisode", key: "episodeFA" },
    { label: "Date de l'épisode", key: "episodeFADate" },
    { label: "Type FA", key: "typeFA" },
    { label: "symptome FA", key: "symptomeFA" },
    { label: "Severité symptome", key: "severitéSymptome" },
    { label: "Coronaropathie", key: "coronaropathie" },
    {
      label: "Insuffisance cardiaque cronique",
      key: "Insuffisancecardiaquecronique",
    },
    { label: "Valvupathies", key: "valvupathies" },
    {
      label: "Cardiomyopathie hypertrophique",
      key: "cardiomyopathieHypertrophique",
    },
    { label: "Cardiomyoathie dilatee", key: "cardiomyoathieDilatee" },
    { label: "Autre maladie cardiaque", key: "autreMaladieValue" },
    { label: "Dysthyroidie", key: "dysthyroidie" },
    { label: "Type Dysthyroidie", key: "dysthyroidieType" },
    {
      label: "Insuffisance renale chronique",
      key: "insuffisanceRenaleChronique",
    },
    { label: "BMI", key: "bmi" },
    { label: "HTA", key: "hta" },
    { label: "HTA depuis", key: "htaDate" },
    { label: "Diabete", key: "diabete" },
    { label: "Diabete depuis", key: "diabeteDate" },
    { label: "Dyslipidemie", key: "dyslipidemie" },
    { label: "Dyslipidemie depuis", key: "dyslipidemieDate" },
    { label: "Tabagisme", key: "tabagisme" },
    { label: "Consommation alcool", key: "consommationAlcool" },
    { label: "Sedentarite", key: "sedentarite" },
    { label: "Antécédent d’AVC/AIT/Embolie systémique", key: "antecedent" },
    {
      label: "Évènement hémorragique majeur",
      key: "evenementHemoragiqueMajeur",
    },
    { label: "Cancer", key: "cancer" },
    { label: "Pathologie vasculaire", key: "pathologieVasculaire" },
    { label: "Score CHAD", key: "scoreCHAD" },
    { label: "Score Has Bled", key: "scoreHasBled" },
    { label: "Traitement médical", key: "traitementMedical" },
    {
      label: "Traitement médical type 1",
      key: "traitementMedicalAnterieurFaType1",
    },
    {
      label: "Traitement médical type 2",
      key: "traitementMedicalAnterieurFaType2",
    },
    { label: "Antécédent de cardioversion", key: "antecedentCardioversion" },
    { label: "Antécédent d’ablation", key: "antecedentAblation" },
    { label: "Implantation de pacemaker", key: "implantationPaceMaker" },
    { label: "fréquence Cardiaque ", key: "frequenceCardiaque" },
    { label: "Rythme ", key: "rythme" },
    { label: "Durée onde P", key: "dureeOndeP" },
    { label: "Durée du QRS", key: "dureeQRS" },
    { label: "Interval PR", key: "morphologie" },
    { label: "Interval QT", key: "intervalQT" },
    { label: "BBG", key: "BBG" },
    //{ label: "BDD", key: "BDD" },
    { label: "HVG", key: "HVG" },
    // { label: "Sokolov", key: "sokolov" },
    //{ label: "Lewis", key: "lewis" },
    { label: "Infarctus", key: "infractus" },
    { label: "Territoire Infarctus", key: "infractusTerritoire" },
    { label: "Masse VG", key: "masseeVG" },
    { label: "FEVG", key: "FEVG" },
    { label: "Volume de l'OG", key: "volumeOG" },
    { label: "Thrombus intra auriculaire", key: "thrombusIntraAuriculaire" },
    { label: "Surface OD", key: "surfaceOD" },
    { label: "PAPS", key: "PAPS" },
    { label: "GB", key: "GB" },
    { label: "Plaquettes", key: "plaquettes" },
    { label: "Urée", key: "uree" },
    { label: "Creatininemie", key: "creatininemie" },
    { label: "NA+", key: "NAplus" },
    { label: "K+", key: "Kplus" },
    { label: "INR", key: "TP" },
    { label: "Clairance", key: "clairance" },
    { label: "Glycemie", key: "glycemie" },
    { label: "HB A1C", key: "triglycerides" },
    { label: "LDLC", key: "cholesterolTotal" },
    { label: "TSH", key: "TSH" },
    { label: "Traitement anti thrombotique", key: "traitement" },
    { label: "Anticoagulant oral", key: "AnticoagulantOral" },
    { label: "Antiagrégant plaquettaire", key: "antiagrégantPlaquettaire" },
    { label: "Raison refus traitement", key: "raisonRefus" },
    { label: "Strategie controle rythme", key: "strategieRythme" },
    { label: "Traitement anti arythmique", key: "traitementAntiArythmique" },
    { label: "Ablation FA", key: "ablationFA" },
    { label: "Strategie cotrole frequence", key: "strategieFrequence" },
    { label: "Betabloquant", key: "betabloquant" },
    { label: "Digoxine", key: "digoxine" },
    {
      label: "Inhibiteur calcique bradycardisant",
      key: "InhibiteurCalciqueBradycardisant",
    },
    { label: "Amiodarone", key: "amiodarone" },
    { label: "IEC / ARA2", key: "iec" },
    { label: "IEC / ARA2 valeur", key: "iecDate" },
    { label: "Betabloquant valeur", key: "betabloquantDate" },
    { label: "Diurétique de l’anse", key: "diurétiqueAnse" },
    { label: "Diurétique de l’anse valeur", key: "diurétiqueAnseDate" },
    { label: "Diurétique thiazidique", key: "diurétiqueThiazidique" },
    {
      label: "Diurétique thiazidique valeur",
      key: "diurétiqueThiazidiqueDate",
    },
    { label: "Aldostérone", key: "aldosterone" },
    { label: "Aldostérone valeur", key: "aldosteroneDate" },
    { label: "Statine ", key: "statine" },
    { label: "Statine valeur", key: "statineDate" },
    { label: "Anti diabétique oraux", key: "antiDiabetiqueOraux" },
    { label: "Insuline ", key: "insuline" },
    { label: "Hormones Thyroidiennes  ", key: "hormonesThyroidiennes" },
  ];
  useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const unsubscribe2 = firestore
          .collection("medecins")
          .doc(param.idmedecin)
          .collection("patients")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setList(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                nom: doc.data().nom,
                createdAt: doc.data().createdAt,
                circonstance: doc.data().circonstance,
                sexe: doc.data().sexe,
                age: `${date - doc.data().birthDate}`,
                birthDate: doc.data().birthDate,
                residence: doc.data().residence,
                situationFamiliale: doc.data().situationFamiliale,
                assurance: doc.data().assurance,
                niveau: doc.data().niveau,
                num: doc.data().num,
                num2: doc.data().num2,
                circonstance1: doc.data().circonstance1,
                circonstance2: doc.data().circonstance2,
                episodeFA: `${
                  doc.data().episodeFA.length !== 0 ? "oui" : "non"
                }`,
                episodeFADate: doc.data().episodeFADate,
                typeFA: doc.data().typeFA,
                symptomeFA: doc.data().symptomeFA,
                severitéSymptome: doc.data().severitéSymptome,
                coronaropathie: `${
                  doc.data().coronaropathie.includes("Coronaropthie")
                    ? "oui"
                    : "non"
                }`,
                Insuffisancecardiaquecronique: `${
                  doc
                    .data()
                    .coronaropathie.includes("Insuffisance cardiaque cronique")
                    ? "oui"
                    : "non"
                }`,
                valvupathies: `${
                  doc.data().valvupathies.length !== 0 ? "oui" : "non"
                }`,
                cardiomyopathieHypertrophique: `${
                  doc.data().cardiomyopathieHypertrophique.length !== 0
                    ? "oui"
                    : "non"
                }`,
                cardiomyoathieDilatee: `${
                  doc.data().cardiomyoathieDilatee.length !== 0 ? "oui" : "non"
                }`,
                autreMaladieValue: doc.data().autreMaladieDate,
                sas: `${doc.data().sas.length !== 0 ? "oui" : "non"}`,
                dysthyroidie: `${
                  doc.data().dysthyroidie.length !== 0 ? "oui" : "non"
                }`,
                dysthyroidieType: doc.data.dysthyroidieType,
                insuffisanceRenaleChronique: `${
                  doc.data().insuffisanceRenaleChronique.length !== 0
                    ? "oui"
                    : "non"
                }`,
                bmi: doc.data().bmi,
                hta: `${doc.data().hta.length !== 0 ? "oui" : "non"}`,
                htaDate: doc.data().htaDate,
                diabete: `${doc.data().diabete.length !== 0 ? "oui" : "non"}`,
                diabeteDate: doc.data().diabeteDate,
                dyslipidemie: `${
                  doc.data().dyslipidemie.length !== 0 ? "oui" : "non"
                }`,
                dyslipidemieDate: doc.data().dyslipidemieDate,
                tabagisme: doc.data().tabagisme,
                consommationAlcool: doc.data().consommationAlcool,
                sedentarite: doc.data().sedentarite,
                antecedent: `${
                  doc.data().antecedent.length !== 0 ? "oui" : "non"
                }`,
                evenementHemoragiqueMajeur: `${
                  doc.data().evenementHemoragiqueMajeur.length !== 0
                    ? "oui"
                    : "non"
                }`,

                cancer: `${doc.data().cancer.length !== 0 ? "oui" : "non"}`,

                pathologieVasculaire: `${
                  doc.data().pathologieVasculaire.length !== 0 ? "oui" : "non"
                }`,
                scoreCHAD: doc.data().scoreCHAD,
                scoreHasBled: doc.data().scoreHasBled,
                traitementMedical: `${
                  doc.data().traitementMedical.length !== 0 ? "oui" : "non"
                }`,
                traitementMedicalAnterieurFaType1: `${
                  doc.data().traitementMedicalAnterieurFaType1.length !== 0
                    ? "oui"
                    : "non"
                }`,
                traitementMedicalAnterieurFaType2: `${
                  doc.data().traitementMedicalAnterieurFaType2.length !== 0
                    ? "oui"
                    : "non"
                }`,
                antecedentCardioversion: `${
                  doc.data().antecedentCardioversion.length !== 0
                    ? "oui"
                    : "non"
                }`,
                antecedentAblation: `${
                  doc.data().antecedentAblation.length !== 0 ? "oui" : "non"
                }`,
                implantationPaceMaker: `${
                  doc.data().implantationPaceMaker.length !== 0 ? "oui" : "non"
                }`,
                frequenceCardiaque: doc.data().frequenceCardiaque,
                rythme: doc.data().rythme,

                dureeOndeP: doc.data().dureeOndeP,
                dureeQRS: doc.data().dureeQRS,
                morphologie: doc.data().morphologie,
                intervalQT: doc.data().intervalQT,
                bbg: doc.data().bbg,
                //bbd: `${doc.data().bbd.length !== 0 ? "oui" : "non"}`,
                hvg: `${doc.data().hvg.length !== 0 ? "oui" : "non"}`,

                // sokolov: doc.data().sokolov,
                //lewis: doc.data().lewis,
                infractus: `${
                  doc.data().infractus.length !== 0 ? "oui" : "non"
                }`,
                infractusTerritoire: doc.data().infractusTerritoire,
                masseeVG: doc.data().masseeVG,

                FEVG: doc.data().FEVG,
                volumeOG: doc.data().volumeOG,
                thrombusIntraAuriculaire: doc.data().thrombusIntraAuriculaire,
                surfaceOD: doc.data().surfaceOD,
                PAPS: doc.data().PAPS,
                GB: doc.data().GB,
                plaquettes: doc.data().plaquettes,
                uree: doc.data().uree,
                creatininemie: doc.data().creatininemie,
                NAplus: doc.data().NAplus,
                Kplus: doc.data().Kplus,
                TP: doc.data().TP,
                clairance: `${
                  doc.data().sexe === "homme"
                    ? ((140 - doc.data().birthDate) /
                        doc.data().creatininemie) *
                      doc.data().poids *
                      1.23
                    : ((140 - doc.data().birthDate) /
                        doc.data().creatininemie) *
                      doc.data().poids *
                      1.04
                }`,
                glycemie: doc.data().glycemie,
                triglycerides: doc.data().triglycerides,
                cholesterolTotal: doc.data().cholesterolTotal,
                TSH: doc.data().TSH,
                traitement: doc.data().traitement,
                AnticoagulantOral: doc.data().AnticoagulantOral,
                antiagrégantPlaquettaire: doc.data().antiagrégantPlaquettaire,
                raisonRefus: doc.data().traitementOption3,
                strategieRythme: doc.data().strategieRythme1,
                traitementAntiArythmique: doc.data().strategieRythme21,
                ablationFA: `${
                  doc.data().strategieRythme3.length !== 0 ? "oui" : "non"
                }`,
                strategieFrequence: `${
                  doc.data().strategieFrequence.length !== 0 ? "oui" : "non"
                }`,
                betabloquant: `${
                  doc.data().strategieFrequence1.includes("Bétabloquant")
                    ? "oui"
                    : "non"
                }`,
                digoxine: `${
                  doc.data().strategieFrequence1.includes("Digoxine")
                    ? "oui"
                    : "non"
                }`,
                InhibiteurCalciqueBradycardisant: `${
                  doc
                    .data()
                    .strategieFrequence1.includes(
                      "Inhibiteur calcique bradycardisantt"
                    )
                    ? "oui"
                    : "non"
                }`,
                amiodarone: `${
                  doc.data().strategieFrequence1.includes("Amiodarone")
                    ? "oui"
                    : "non"
                }`,
                iec: `${doc.data().iec.length !== 0 ? "oui" : "non"}`,
                iecDate: doc.data().iecDate,
                betabloquantDate: doc.data().betabloquantDate,
                diurétiqueAnse: `${
                  doc.data().diurétiqueAnse.length !== 0 ? "oui" : "non"
                }`,
                diurétiqueAnseDate: doc.data().diurétiqueAnseDate,
                diurétiqueThiazidique: `${
                  doc.data().diurétiqueThiazidique.length !== 0 ? "oui" : "non"
                }`,
                diurétiqueThiazidiqueDate: doc.data().diurétiqueThiazidiqueDate,
                aldosterone: `${
                  doc.data().aldosterone.length !== 0 ? "oui" : "non"
                }`,
                aldosteroneDate: doc.data().aldosteroneDate,
                statine: `${doc.data().statine.length !== 0 ? "oui" : "non"}`,
                statineDate: doc.data().statineDate,
                antiDiabetiqueOraux: `${
                  doc.data().antiDiabetiqueOraux.length !== 0 ? "oui" : "non"
                }`,
                insuline: `${doc.data().insuline.length !== 0 ? "oui" : "non"}`,
                hormonesThyroidiennes: `${
                  doc.data().hormonesThyroidiennes.length !== 0 ? "oui" : "non"
                }`,
              }))
            )
          );
        return unsubscribe2;
      }
    });
  }, []);
  return (
    <StyledDiv>
      <NavTop />
      <Title title="Liste des patients" />
      <div className="list-container">
        <div className="list">
          <ListPatientsItem
            age="Age"
            nom="Nom"
            sexe="Sexe"
            residence="Residence"
            niveau="Niveau socio-économique"
            dateInclusion="Date d'inclusions"
            color="white"
            background="#243153"
          />
          {list.map((patient, index) => {
            return (
              <div key={patient.id}>
                {index % 2 === 0 ? (
                  <ListPatientsItem
                    key={patient.id}
                    age={patient.age}
                    nom={patient.nom}
                    sexe={patient.sexe}
                    residence={patient.residence}
                    niveau={patient.niveau}
                    dateInclusion={patient.createdAt}
                    onClick={() =>
                      navigate(
                        `/patientinfoAdmin/${param.idmedecin}/${patient.id}`
                      )
                    }
                    color="#243153"
                    background="white"
                  />
                ) : (
                  <ListPatientsItem
                    key={patient.id}
                    age={patient.age}
                    nom={patient.nom}
                    sexe={patient.sexe}
                    residence={patient.residence}
                    niveau={patient.niveau}
                    dateInclusion={patient.createdAt}
                    onClick={() =>
                      navigate(
                        `/patientinfoAdmin/${param.idmedecin}/${patient.id}`
                      )
                    }
                    color="#243153"
                    background="#cdd7f3"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lien">
        pour exporter les données des patients, veuillez cliquer sur
        <CSVLink classNamee="csvButton" data={list} headers={headers}>
          {" "}
          ce lien
        </CSVLink>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    .list {
      border-radius: 10px;
      overflow: hidden;
    }
  }
  .lien {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
`;
