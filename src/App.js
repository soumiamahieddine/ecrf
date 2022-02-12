import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import DonnéesDémograghiques from "./pages/formulaire/prise-initial/DonnéesDémograghiques";
import LoginScreen from "./pages/LoginScreen";
import styled from "styled-components";
import FacteursDeRisqueCardioVasculaire from "./pages/formulaire/prise-initial/FacteursDeRisqueCardioVasculaire";
import PathologiesAssociées from "./pages/formulaire/prise-initial/PathologiesAssociées";
import Comorbidité from "./pages/formulaire/prise-initial/Comorbidité";
import TraitementAnterieurFA from "./pages/formulaire/prise-initial/TraitementAnterieurFA";
import SymptomesALinclusion from "./pages/formulaire/prise-initial/SymptomesALinclusion";
import MotifDAdmission from "./pages/formulaire/prise-initial/MotifDAdmission";
import TraitementAntiThrombotique from "./pages/formulaire/priseEnChargeMedical/TraitementAntiThrombotique";
import TraitementDeLaFA from "./pages/formulaire/priseEnChargeMedical/TraitementDeLaFA";
import AutreTraitementMedical from "./pages/formulaire/priseEnChargeMedical/AutreTraitementMedical";
import ListPatients from "./pages/ListPatients";
import Dashboard from "./pages/Dashboard";
import SubApp from "./SubApp";
import AddDoctor from "./pages/Admin/AddDoctor";
import PatientInfos from "./pages/PatientInfos";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Routes>
        <Route path="/" index element={<LoginScreen />} />
        <Route path="/" element={<SubApp />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listPatients" element={<ListPatients />} />
          <Route
            path="donneesDemograghiques/:idpatient"
            element={<DonnéesDémograghiques />}
          />
          <Route
            path="facteursDeRisqueCardioVasculaire/:idpatient"
            element={<FacteursDeRisqueCardioVasculaire />}
          />
          <Route
            path="pathologiesAssociees/:idpatient"
            element={<PathologiesAssociées />}
          />
          <Route path="comorbidite/:idpatient" element={<Comorbidité />} />
          <Route
            path="traitementAnterieurFA/:idpatient"
            element={<TraitementAnterieurFA />}
          />
          <Route
            path="motifDAdmission/:idpatient"
            element={<MotifDAdmission />}
          />
          <Route
            path="symptomesALinclusion/:idpatient"
            element={<SymptomesALinclusion />}
          />
          <Route
            path="traitementAntiThrombotique/:idpatient"
            element={<TraitementAntiThrombotique />}
          />
          <Route
            path="traitementDeLaFA/:idpatient"
            element={<TraitementDeLaFA />}
          />
          <Route
            path="autreTraitementMedical/:idpatient"
            element={<AutreTraitementMedical />}
          />
          <Route path="patientinfo/:idpatient" element={<PatientInfos />} />
        </Route>
      </Routes>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
`;

export default App;
