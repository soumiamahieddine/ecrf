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
import NiceButton from "../components/NiceButton";

export default function ProfilePatient({
  isAdminPage,
  data,
  onClick,
  onClickAdmin,
}) {
  console.log(data);
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
                    <span className="gras">Age</span> : {data.data.age}
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
                    <span className="gras">BMI</span> : {data.data.bmi}
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
                    {data.data.sedentarite.length !== 0 ? "oui" : "non"}{" "}
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
                  <AccordionItemButton>7. Evaluation</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
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
                  <AccordionItemButton>
                    8. Traitement antérieur de la FA
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">Traitement médical</span> :{" "}
                    {data.data.traitementMedicalInput.length !== 0
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
                    <span className="gras">Morphologie</span> :{" "}
                    {data.data.morphologie}
                  </p>
                  <p>
                    <span className="gras">BBG</span> :{" "}
                    {data.data.bbg.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">BBD</span> :{" "}
                    {data.data.bbd.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    <span className="gras">HVG</span> :{" "}
                    {data.data.hvg.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.hvg.includes("hvg") ? (
                      <>
                        <span className="left">
                          Sokolov : {data.data.sokolov}
                        </span>{" "}
                        <span className="left">Lewis: {data.data.lewis}</span>
                      </>
                    ) : (
                      ""
                    )}
                  </p>
                  <p>
                    <span className="gras">Infractus </span> :
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
                    <span className="gras">Fonction diastolique</span> :{" "}
                    {data.data.fonctionDiastolique}
                  </p>
                  <p>
                    <span className="gras">Volume de l'OG </span>:{" "}
                    {data.data.volumeOG}
                  </p>
                  <p>
                    <span className="gras">TDE</span> : {data.data.TDE}
                  </p>
                  <p>
                    <span className="gras">IM Fonctionnelle</span> :{" "}
                    {data.data.IMFonctionnelle.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.IMFonctionnelle.includes("oui") ? (
                      <>
                        <span className="left">
                          Grade : {data.data.gradeIM}
                        </span>{" "}
                        <span className="left">SOR: {data.data.SOR}</span>
                        <span className="left">VR: {data.data.VR}</span>
                      </>
                    ) : (
                      ""
                    )}
                  </p>

                  <p>
                    <span className="gras">Thrombus intra auriculaire </span>:{" "}
                    {data.data.thrombusIntraAuriculaire.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <h3>Analyse coeur droite</h3>
                  <p>
                    <span className="gras">TAPSE</span> : {data.data.TAPSE}
                  </p>
                  <p>
                    <span className="gras">SVD</span> : {data.data.SVD}
                  </p>

                  <p>
                    <span className="gras">IT Fonctionnelle</span> :{" "}
                    {data.data.ITFonctionnelle.length !== 0 ? "oui" : "non"}{" "}
                    {data.data.ITFonctionnelle.includes("oui") ? (
                      <>
                        <span className="left">
                          Grade : {data.data.gradeIT}
                        </span>{" "}
                      </>
                    ) : (
                      ""
                    )}
                  </p>

                  <p>
                    <span className="gras">Surface OD</span> :{" "}
                    {data.data.surfaceOD}
                  </p>
                  <p>
                    <span className="gras">PAPS</span> : {data.data.PAPS}
                  </p>
                  <p>
                    <span className="gras">VCI</span> : {data.data.VCI}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>{" "}
              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>3. Biologie</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    <span className="gras">FNS</span> : {data.data.FNS}
                  </p>
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
                    <span className="gras">TP</span> : {data.data.TP}
                  </p>
                  <h3>INR</h3>
                  <p>
                    <span className="gras">Glycemie</span> :{" "}
                    {data.data.glycemie}
                  </p>
                  <p>
                    <span className="gras">Triglycerides</span> :{" "}
                    {data.data.triglycerides}
                  </p>
                  <p>
                    <span className="gras">Cholesterol total</span> :{" "}
                    {data.data.cholesterolTotal}
                  </p>
                  <p>
                    <span className="gras">ASAT</span> : {data.data.ASAT}
                  </p>
                  <p>
                    <span className="gras">ALAT</span> : {data.data.ALAT}
                  </p>
                  <p>
                    <span className="gras">Bilirubine total</span> :{" "}
                    {data.data.bilirubineTotal}
                  </p>
                  <p>
                    <span className="gras">TSH</span> : {data.data.TSH}
                  </p>
                  <p>
                    <span className="gras">BNP</span> : {data.data.BNP}
                  </p>
                  <p>
                    <span className="gras">Troponines</span> :{" "}
                    {data.data.troponines}
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
        </Accordion>
      </div>
      {isAdminPage === true ? (
        <NiceButton
          className="button"
          title="Signaler Patient"
          onClick={onClickAdmin}
        />
      ) : (
        <NiceButton title="Modifier" onClick={onClick} />
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .myAcc {
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
