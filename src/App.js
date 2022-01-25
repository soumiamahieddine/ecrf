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

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Routes>
        <Route path="/login" index element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<SubApp />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listPatients" element={<ListPatients />} />
          <Route
            path="donneesDemograghiques"
            element={<DonnéesDémograghiques />}
          />
          <Route
            path="facteursDeRisqueCardioVasculaire"
            element={<FacteursDeRisqueCardioVasculaire />}
          />
          <Route
            path="pathologiesAssociees"
            element={<PathologiesAssociées />}
          />
          <Route path="comorbidite" element={<Comorbidité />} />
          <Route
            path="traitementAnterieurFA"
            element={<TraitementAnterieurFA />}
          />
          <Route path="motifDAdmission" element={<MotifDAdmission />} />
          <Route
            path="symptomesALinclusion"
            element={<SymptomesALinclusion />}
          />
          <Route
            path="traitementAntiThrombotique"
            element={<TraitementAntiThrombotique />}
          />
          <Route path="traitementDeLaFA" element={<TraitementDeLaFA />} />
          <Route
            path="autreTraitementMedical"
            element={<AutreTraitementMedical />}
          />
        </Route>
      </Routes>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
`;

export default App;
