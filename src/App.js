import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
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

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <TraitementDeLaFA />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
`;

export default App;
