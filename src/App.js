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
import ListPatientsAdmin from "./pages/ListPatientsAdmin";
import PatientInfosAdmin from "./pages/PatientInfosAdmin";
import ListMedecins from "./pages/ListMedecins";
import Dashboard from "./pages/Dashboard";
import SubApp from "./SubApp";
import AddDoctor from "./pages/Admin/AddDoctor";
import PatientInfos from "./pages/PatientInfos";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import Evaluation from "./pages/formulaire/prise-initial/Evaluation";
import ETT from "./pages/formulaire/exploration/ETT";
import ECG from "./pages/formulaire/exploration/ECG";
import Biologie from "./pages/formulaire/exploration/Biologie";
import Suivi3 from "./pages/formulaire/suivis/Suivi3";
import Suivi6 from "./pages/formulaire/suivis/Suivi6";
import Suivi12 from "./pages/formulaire/suivis/Suivi12";

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
            path="motifDAdmission/:idpatient"
            element={<MotifDAdmission />}
          />
          <Route
            path="symptomesALinclusion/:idpatient"
            element={<SymptomesALinclusion />}
          />
          <Route
            path="pathologiesAssociees/:idpatient"
            element={<PathologiesAssociées />}
          />
          <Route
            path="facteursDeRisqueCardioVasculaire/:idpatient"
            element={<FacteursDeRisqueCardioVasculaire />}
          />
          <Route path="comorbidite/:idpatient" element={<Comorbidité />} />
          <Route path="evaluation/:idpatient" element={<Evaluation />} />
          <Route
            path="traitementAnterieurFA/:idpatient"
            element={<TraitementAnterieurFA />}
          />
          <Route path="ecg/:idpatient" element={<ECG />} />
          <Route path="ett/:idpatient" element={<ETT />} />
          <Route path="biologie/:idpatient" element={<Biologie />} />
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
          <Route path="suivi3/:idpatient" element={<Suivi3 />} />
          <Route path="suivi6/:idpatient" element={<Suivi6 />} />
          <Route path="suivi12/:idpatient" element={<Suivi12 />} />
          //admin routes
          <Route path="patientinfo/:idpatient" element={<PatientInfos />} />
          <Route path="admindashboard" element={<DashboardAdmin />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="listmedecins" element={<ListMedecins />} />
          <Route
            path="listPatientsAdmin/:idmedecin"
            element={<ListPatientsAdmin />}
          />
          <Route
            path="patientinfoAdmin/:idmedecin/:idpatient"
            element={<PatientInfosAdmin />}
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
