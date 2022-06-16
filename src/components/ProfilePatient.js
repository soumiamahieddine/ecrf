import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "../styles/AccordionStyle.scss";
import styled from "styled-components";

export default function ProfilePatient({ data }) {
  const date = new Date().getFullYear();
  console.log(data.data);
  return (
    <StyledDiv>
      <div className="myAcc">
        <Accordion allowZeroExpanded="true" allowMultipleExpanded="true">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Prise de données initial
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    1. Données démographiques
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Nom et prénom </span>:{" "}
                    {data.data.nom}
                  </p>
                  <p>
                    <span className="gras">Circonstance d'inclusion </span>:{" "}
                    {data.data.circonstance}
                  </p>
                  <p>
                    <span className="gras">Sexe</span> : {data.data.sexe}
                  </p>
                  <p>
                    <span className="gras">Age</span> :{" "}
                    {date - data.data.birthDate}
                  </p>
                  <p>
                    <span className="gras">Résidence</span> :{" "}
                    {data.data.residence}
                  </p>
                  <p>
                    <span className="gras">Situation familiale</span> :{" "}
                    {data.data.situationFamiliale}
                  </p>
                  <p>
                    <span className="gras">Assurance</span> :{" "}
                    {data.data.assurance}
                  </p>
                  <p>
                    <span className="gras">Niveau Socio-économique </span>:{" "}
                    {data.data.niveau}
                  </p>
                  <p>
                    <span className="gras">Numéro de téléphone </span>:{" "}
                    {data.data.num}
                  </p>
                  <p>
                    <span className="gras">Numéro de téléphone du parent </span>
                    : {data.data.num2}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    2. Motif d’admission/consultation{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h3>Motif d'admission</h3>
                  <p>
                    <span className="gras">
                      Les circonstances dans lesquelles la FA a été
                      diagnostiquée
                    </span>
                    : {data.data.circonstance1.join(", ")}{" "}
                  </p>

                  {data.data.circonstance1.includes("complication") ? (
                    <p>
                      <span className="gras">Complication</span> :{" "}
                      {data.data.circonstance2.join(", ")}
                    </p>
                  ) : (
                    ""
                  )}
                  <h3>Diagnostic de la FA</h3>

                  {data.data.episodeFA === "oui" ? (
                    <p>
                      <span className="gras">Premier épisode</span> : oui
                    </p>
                  ) : (
                    <p>
                      <span className="gras">Episode détécté le </span>:{" "}
                      {data.data.episodeFADate}
                    </p>
                  )}
                  <p>
                    <span className="gras">Type clinique de FA </span> :{" "}
                    {data.data.typeFA}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    3. Symptômes à l'inclusion
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">
                      Type de symptômes à l’inclusion du patient
                    </span>{" "}
                    : {data.data.symptomeFA}
                  </p>
                  <p>
                    <span className="gras">Symptomes liés à la FA </span>:{" "}
                    {data.data.symptomes.join(", ")}
                  </p>
                  <p>
                    <span className="gras">Séverité des symptomes </span>:{" "}
                    {data.data.severitéSymptome}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    4. Pathologies associées
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Coronaropathie </span>:{" "}
                    {data.data.coronaropathie.includes("Coronaropthie")
                      ? "oui"
                      : "non"}{" "}
                  </p>
                  <p>
                    <span className="gras">
                      Insuffisance cardiaque cronique{" "}
                    </span>
                    :{" "}
                    {data.data.coronaropathie.includes(
                      "Insuffisance cardiaque cronique"
                    )
                      ? "oui"
                      : "non"}{" "}
                  </p>

                  <p>
                    <span className="gras">Valvulopathies </span>:{" "}
                    {data.data.valvupathies.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Cardiomyopathie hypertrophique</span>{" "}
                    :{" "}
                    {data.data.cardiomyopathieHypertrophique.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <p>
                    <span className="gras">Cardiomyopathie dilatée</span> :{" "}
                    {data.data.cardiomyoathieDilatee.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <p>
                    <span className="gras">Autre maladie cardiaque</span> :{" "}
                    {data.data.autreMaladieDate}{" "}
                  </p>
                  <p>
                    <span className="gras">SAS</span> :{" "}
                    {data.data.sas.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Dysthyroïdie </span>:{" "}
                    {data.data.dysthyroidie.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Type Dysthyroïdie</span>:{" "}
                    {data.data.dysthyroidieType}
                  </p>
                  <p>
                    <span className="gras">
                      Insuffisance rénale chronique degrés{" "}
                    </span>
                    :{" "}
                    {data.data.insuffisanceRenaleChronique.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    5. Facteurs de risque cardio vasculaire
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Taille</span> : {data.data.taille}
                  </p>
                  <p>
                    <span className="gras">Poids</span> : {data.data.poids}
                  </p>
                  <p>
                    <span className="gras">BMI</span> :{" "}
                    {(data.data.poids / Math.pow(data.data.taille, 2)).toFixed(
                      2
                    )}
                  </p>
                  <p>
                    <span className="gras">HTA</span> :{" "}
                    {data.data.hta.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.hta.includes("oui") ? (
                      <span className="left">
                        {" "}
                        Depuis : {data.data.htaDate}{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p>
                    <span className="gras">Diabète</span> :{" "}
                    {data.data.diabete.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.diabete.includes("oui") ? (
                      <span className="left">
                        {" "}
                        Depuis : {data.data.diabeteDate}{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p>
                    <span className="gras">Dyslipidémie </span> :{""}
                    {data.data.dyslipidemie.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.dyslipidemie.includes("oui") ? (
                      <span className="left">
                        {" "}
                        Depuis : {data.data.dyslipidemieDate}{" "}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>

                  <p>
                    <span className="gras">Tabagisme</span> :{" "}
                    {data.data.tabagisme}{" "}
                  </p>
                  <p>
                    <span className="gras">Consommation alcool</span> :{" "}
                    {data.data.consommationAlcool}
                  </p>
                  <p>
                    <span className="gras">Sédentarité</span> :{" "}
                    {data.data.sedentarite}{" "}
                  </p>
                  <p>
                    <span className="gras">score CHADS2SVAC</span> :{" "}
                    {data.data.scoreCHAD}
                  </p>
                  <p>
                    <span className="gras">Score HAS BLED </span>:{" "}
                    {data.data.scoreHasBled}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>6. Comorbidité</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">
                      Antécédent d’AVC/AIT/Embolie systémique{" "}
                    </span>
                    : {data.data.antecedent.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Évènement hémorragique majeur </span>
                    :{" "}
                    {data.data.evenementHemoragiqueMajeur.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <p>
                    <span className="gras">Cancer</span> :{" "}
                    {data.data.cancer.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Pathologie vasculaire</span> :{" "}
                    {data.data.pathologieVasculaire.length !== 0
                      ? "oui"
                      : "non"}{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    7. Traitement antérieur de la FA
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Traitement médical</span> :{" "}
                    {data.data.traitementMedical.length !== 0 ? "oui" : "non"}{" "}
                  </p>

                  <p>
                    <span className="gras">Traitement ralentisseur</span> :{" "}
                    {data.data.traitementMedicalAnterieurFaType1.length !== 0
                      ? "oui"
                      : "non"}{" "}
                  </p>

                  <p>
                    <span className="gras">Traitement arythmique</span> :{" "}
                    {data.data.traitementMedicalAnterieurFaType2.length !== 0
                      ? "oui"
                      : "non"}{" "}
                  </p>

                  <p>
                    <span className="gras">Antécédent de cardioversion </span>:{" "}
                    {data.data.antecedentCardioversion.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <p>
                    <span className="gras">Antécédent d’ablation</span> :{" "}
                    {data.data.antecedentAblation.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">Implantation de pacemaker </span>:{" "}
                    {data.data.implantationPaceMaker.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Exploration</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>1. ECG</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Fréquence Cardiaque </span> :{" "}
                    {data.data.frequenceCardiaque}
                  </p>
                  <p>
                    <span className="gras">Rythme</span> : {data.data.rythme}
                  </p>
                  <p>
                    <span className="gras">Durée onde P </span>:{" "}
                    {data.data.dureeOndeP}
                  </p>
                  <p>
                    <span className="gras">Durée du QRS </span>:{" "}
                    {data.data.dureeQRS}
                  </p>
                  <p>
                    <span className="gras">Interval PR</span> :{" "}
                    {data.data.morphologie}
                  </p>
                  <p>
                    <span className="gras">Interval QT</span> :{" "}
                    {data.data.intervalQT}
                  </p>
                  <p>
                    <span className="gras">BBG</span> :{" "}
                    {data.data.bbg.length === "bbg" ? "BBG" : "BBD"}
                  </p>
                  {/* <p>
                    <span className="gras">BBD</span> :{" "}
                    {data.data.bbd.length !== 0 ? "oui" : "non"}
                  </p> */}
                  <p>
                    <span className="gras">HVG</span> :{" "}
                    {data.data.hvg.length !== 0 ? "oui" : "non"}{" "}
                    {/* {data.data.hvg.includes("hvg") ? (
                      <>
                        <span className="left">
                          Sokolov : {data.data.sokolov}
                        </span>{" "}
                        <span className="left">Lewis: {data.data.lewis}</span>
                      </>
                    ) : (
                      ""
                    )} */}
                  </p>
                  <p>
                    <span className="gras">Infarctus </span> :
                    {data.data.infractus.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.infractus.includes("infractus") ? (
                      <span className="left">
                        Territoire : {data.data.infractusTerritoire}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>{" "}
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>2. ETT</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h3>Analyse coeur gauche</h3>
                  <p>
                    <span className="gras">Masse VG</span> : {data.data.masseVG}
                  </p>
                  <p>
                    <span className="gras">FEVG</span> : {data.data.FEVG}
                  </p>
                  <p>
                    <span className="gras">Volume de l'OG </span>:{" "}
                    {data.data.volumeOG}
                  </p>
                  <p>
                    <span className="gras">Thrombus intra auriculaire </span>:{" "}
                    {data.data.thrombusIntraAuriculaire}
                  </p>
                  <h3>Analyse coeur droite</h3>

                  <p>
                    <span className="gras">Surface OD</span> :{" "}
                    {data.data.surfaceOD}
                  </p>
                  <p>
                    <span className="gras">PAPS</span> : {data.data.PAPS}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>{" "}
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>3. Biologie</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">GB</span> : {data.data.GB}
                  </p>
                  <p>
                    <span className="gras">Plaquettes</span> :{" "}
                    {data.data.plaquettes}
                  </p>
                  <p>
                    <span className="gras">Urée</span> : {data.data.uree}
                  </p>
                  <p>
                    <span className="gras">Creatininemie</span> :{" "}
                    {data.data.creatininemie}
                  </p>
                  <p>
                    <span className="gras">NA+</span> : {data.data.NAplus}
                  </p>
                  <p>
                    <span className="gras">K+</span> : {data.data.Kplus}
                  </p>
                  <p>
                    <span className="gras">INR</span> : {data.data.TP}
                  </p>
                  <p>
                    <span className="gras">Clairance</span> :{" "}
                    {data.data.sexe === "homme" ? (
                      <span>
                        {((140 - (date - data.data.birthDate)) /
                          data.data.creatininemie) *
                          data.data.poids *
                          1.23}
                      </span>
                    ) : (
                      <span>
                        {((140 - (date - data.data.birthDate)) /
                          data.data.creatininemie) *
                          data.data.poids *
                          1.04}
                      </span>
                    )}
                  </p>
                  <p>
                    <span className="gras">Glycemie</span> :{" "}
                    {data.data.glycemie}
                  </p>
                  <p>
                    <span className="gras">HB A1C</span> :{" "}
                    {data.data.triglycerides}
                  </p>
                  <p>
                    <span className="gras">LDLC</span> :{" "}
                    {data.data.cholesterolTotal}
                  </p>
                  <p>
                    <span className="gras">TSH</span> : {data.data.TSH}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Prise en charge médicale
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    1. Traitement Antithrombotique
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {data.data.traitement === "oui" ? (
                    <>
                      <p>
                        {" "}
                        <span className="gras">
                          Le patient suit un traitement anti thrombotique
                        </span>{" "}
                        : {data.data.traitement}
                      </p>
                      <div>
                        {data.data.traitementOption1.length !== 0 ? (
                          <p>
                            {" "}
                            <span className="gras">
                              Anticoagulant oral
                            </span> : {data.data.anticoagulantOral}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        {data.data.traitementOption2.length !== 0 ? (
                          <p>
                            {" "}
                            <span className="gras">
                              Antiagrégant plaquettaire
                            </span>{" "}
                            : {data.data.antiagrégantPlaquettaire}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <p>
                        {" "}
                        <span className="gras">
                          Le patient suit un traitemnt anti thrombotique
                        </span>{" "}
                        : {data.data.traitement}
                      </p>
                      <p>
                        {" "}
                        <span className="gras">raison</span> :{" "}
                        {data.data.traitementOption3}
                      </p>
                    </>
                  )}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    2. Traitement de la FA
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {data.data.strategieRythme.length !== 0 ? (
                    <p>
                      <span className="gras">
                        Stratégie de controle du rythme
                      </span>{" "}
                      : {data.data.strategieRythme1}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.strategieRythme.length !== 0 ? (
                    <p>
                      <span className="gras">Traitement anti arythmique</span> :{" "}
                      {data.data.strategieRythme21}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.strategieRythme.length !== 0 ? (
                    <p>
                      <span className="gras">Ablation de la Fa</span> :{" "}
                      {data.data.strategieRythme21.length !== 0 ? "oui" : "non"}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.strategieFrequence.length !== 0 ? (
                    <p>
                      <span className="gras">
                        Stratégie de contrôle de la fréquence
                      </span>{" "}
                      : {data.data.strategieFrequence1.join(", ")}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    3. Autre traitement médical
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {data.data.iec.length !== 0 ? (
                    <p>
                      <span className="gras">IEC / ARA2</span> :{" "}
                      {data.data.iecDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.betabloquant.length !== 0 ? (
                    <p>
                      <span className="gras"> Bétabloquant </span> :{" "}
                      {data.data.betabloquantDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.diurétiqueAnse.length !== 0 ? (
                    <p>
                      <span className="gras">Diurétique de l’anse</span> :{" "}
                      {data.data.diurétiqueAnseDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.diurétiqueThiazidique.length !== 0 ? (
                    <p>
                      <span className="gras">Diurétique thiazidique</span> :{" "}
                      {data.data.diurétiqueThiazidiqueDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.aldosterone.length !== 0 ? (
                    <p>
                      <span className="gras">Aldostérone</span> :{" "}
                      {data.data.aldosteroneDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  {data.data.statine.length !== 0 ? (
                    <p>
                      <span className="gras"> Statine </span> :{" "}
                      {data.data.statineDate}{" "}
                    </p>
                  ) : (
                    ""
                  )}
                  <p>
                    <span className="gras"> Anti diabétique oraux </span> :{" "}
                    {data.data.antiDiabetiqueOraux.length !== 0 ? "oui" : "non"}{" "}
                  </p>
                  <p>
                    <span className="gras"> Insuline </span> :{" "}
                    {data.data.insuline.length !== 0 ? "oui" : "non"}{" "}
                  </p>
                  <p>
                    <span className="gras"> Hormones Thyroidiennes </span> :{" "}
                    {data.data.hormonesThyroidiennes.length !== 0
                      ? "oui"
                      : "non"}{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </AccordionItemPanel>
          </AccordionItem>
          {data.data.suivi3 && (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>suivi des 3 mois</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {/* <p>
                  <span className="gras">État du patient au contrôle </span> :{" "}
                  {data.data.etatPatientControleS3}
                </p> */}
                <p>
                  <span className="gras">
                    Persistance des symptômes liés à la FA{" "}
                  </span>{" "}
                  : {data.data.persistanceOptionsS3.join(", ")}
                </p>

                <p>
                  <span className="gras">Complication</span> :{" "}
                  {data.data.complicationS3.length !== 0
                    ? ""
                    : "pas de complication"}{" "}
                </p>
                {data.data.complicationS3.length !== 0 ? (
                  <>
                    <div className="margin-left">
                      {data.data.decesS3.length !== 0 ? (
                        <p>
                          <span className="gras">décès</span> :{" "}
                          {data.data.decesOptionS3.join(", ")}{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="margin-left">
                      {data.data.avcS3.length !== 0 ? (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : oui{" "}
                        </p>
                      ) : (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : non{" "}
                        </p>
                      )}
                    </div>
                    <div className="margin-left">
                      <p>
                        <span className="gras">
                          Complications hémorragiques
                        </span>{" "}
                        :{data.data.complicationHemoragiqueS3}{" "}
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </AccordionItemPanel>
            </AccordionItem>
          )}
          {data.data.suivi6 && (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>suivi des 6 mois</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {/* <p>
                  <span className="gras">État du patient au contrôle </span> :{" "}
                  {data.data.etatPatientControleS6}
                </p> */}
                <p>
                  <span className="gras">
                    Persistance des symptômes liés à la FA{" "}
                  </span>{" "}
                  : {data.data.persistanceOptionsS6.join(", ")}
                </p>
                <p>
                  <span className="gras">Complication</span> :{" "}
                  {data.data.complicationS6.length !== 0
                    ? ""
                    : "pas de complication"}{" "}
                </p>
                {data.data.complicationS6.length !== 0 ? (
                  <>
                    <div className="margin-left">
                      {data.data.decesS6.length !== 0 ? (
                        <p>
                          <span className="gras">décès</span> :{" "}
                          {data.data.decesOptionS6.join(", ")}{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="margin-left">
                      {data.data.avcS6.length !== 0 ? (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : oui{" "}
                        </p>
                      ) : (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : non{" "}
                        </p>
                      )}
                    </div>
                    <div className="margin-left">
                      <p>
                        <span className="gras">
                          Complications hémorragiques
                        </span>{" "}
                        :{data.data.complicationHemoragiqueS6}{" "}
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </AccordionItemPanel>
            </AccordionItem>
          )}
          {data.data.suivi12 && (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>suivi des 12 mois</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {/* <p>
                  <span className="gras">État du patient au contrôle </span> :{" "}
                  {data.data.etatPatientControleS12}
                </p> */}
                <p>
                  <span className="gras">
                    Persistance des symptômes liés à la FA{" "}
                  </span>{" "}
                  : {data.data.persistanceOptionsS12.join(", ")}
                </p>
                <p>
                  <span className="gras">Complication</span> :{" "}
                  {data.data.complicationS12.length !== 0
                    ? ""
                    : "pas de complication"}{" "}
                </p>
                {data.data.complicationS12.length !== 0 ? (
                  <>
                    <div className="margin-left">
                      {data.data.decesS12.length !== 0 ? (
                        <p>
                          <span className="gras">décès</span> :{" "}
                          {data.data.decesOptionS12.join(", ")}{" "}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="margin-left">
                      {data.data.avcS12.length !== 0 ? (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : oui{" "}
                        </p>
                      ) : (
                        <p>
                          <span className="gras">
                            AVC ischémique ou embolie systémique
                          </span>{" "}
                          : non{" "}
                        </p>
                      )}
                    </div>
                    <div className="margin-left">
                      <p>
                        <span className="gras">
                          Complications hémorragiques
                        </span>{" "}
                        :{data.data.complicationHemoragiqueS12}{" "}
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </AccordionItemPanel>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .myAcc {
    .margin-left {
      margin-left: 2rem;
    }
    margin: 20px;
    h3 {
      margin: 1rem 0rem;
      color: #90a1d1;
    }
    p {
      .left {
        margin-left: 4rem;
      }
      .gras {
        font-weight: 700;
      }
    }
  }
`;
