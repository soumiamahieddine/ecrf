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

export default function ProfilePatient({ isAdminPage, data, onClick }) {
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
                  <p>Circonstance d'inclusion : {data.data.circonstance}</p>
                  <p>Sexe : {data.data.sexe}</p>
                  <p>Age : {data.data.age}</p>
                  {/* <p>Profession : {data.data.}</p>
                  <p>Résidence : {data.data.}</p> */}
                  <p>Situation familiale : {data.data.situationFamiliale}</p>
                  <p>Assurance : {data.data.assurance}</p>
                  <p>Niveau Socio-économique : {data.data.niveau}</p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    2. Facteurs de risque cardio vasculaire
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>BMI : {data.data.bmi}</p>
                  <p>HTA : {data.data.hta}</p>
                  <p>Diabète : {data.data.diabete}</p>
                  <p>Dyslipidémie : {data.data.dyslipidemie}</p>
                  <p>Tabagisme :{data.data.tabagisme} </p>
                  <p>Consommation alcool : {data.data.consommationAlcool}</p>
                  <p>Sédentarité :{data.data.sedentarite} </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    3. Pathologies associées
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Coronaropathie :{data.data.coronaropathie} </p>
                  <p>
                    Insuffisance cardiaque chronique :
                    {data.data.insuffisanceRenaleChronique.length !== 0
                      ? "oui"
                      : "non"}
                  </p>
                  <p>
                    Valvulopathies :
                    {data.data.valvupathies.length !== 0 ? "oui" : "non"}
                  </p>
                  <p>
                    Cardiomyopathie hypertrophique :
                    {data.data.cardiomyopathieHypertrophique}
                  </p>
                  <p>
                    Cardiomyopathie dilatée :{data.data.cardiomyoathieDilatee}
                  </p>
                  <p>Autre maladie cardiaque :{data.data.autreMaladieDate} </p>
                  <p>SAS : {data.data.sas}</p>
                  <p>Dysthyroïdie : {data.data.dysthyroidie}</p>
                  <p>
                    Insuffisance rénale chronique degrés :
                    {data.data.insuffisanceRenaleChronique}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>4. Comorbidité</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Antécédent d’AVC/AIT/Embolie systémique :
                    {data.data.antecedent}
                  </p>
                  <p>
                    Évènement hémorragique majeur :
                    {data.data.evenementHemoragiqueMajeur}
                  </p>
                  <p>Cancer : {data.data.cancer}</p>
                  <p>
                    Pathologie vasculaire :{data.data.pathologieVasculaire}{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    5. Traitement antérieur de la FA
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Traitement médical :{data.data.traitementMedicalInput} </p>
                  <p>
                    Antécédent de cardioversion :
                    {data.data.antecedentCardioversion}
                  </p>
                  <p>Antécédent d’ablation : {data.data.antecedentAblation}</p>
                  <p>
                    Implantation de pacemaker :{data.data.implantationPaceMaker}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    6. Motif d’admission/consultation{" "}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Traitement médical :{data.data.traitementMedicalInput} </p>
                  <p>
                    Antécédent de cardioversion :
                    {data.data.antecedentCardioversion}
                  </p>
                  <p>Antécédent d’ablation : {data.data.antecedentAblation}</p>
                  <p>
                    Implantation de pacemaker :{data.data.implantationPaceMaker}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem className="inside__acc">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    7. Symptômes à l'inclusion
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
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
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Prise en charge médicale
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      {isAdminPage === true ? (
        <NiceButton className="button" title="Signaler Patient" />
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
  }
`;
