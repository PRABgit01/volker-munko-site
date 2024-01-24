import "./App.css";
import { Container, GlobalStyles } from "./App.styled";
import { AssetManagementHomePage } from "./AssetmanagmentHomeSection/AssetmanagmentHome";
import { Competence } from "./Competence/Competence";

function App() {
  return (
    <div>
      <Container>
        <AssetManagementHomePage />
      </Container>
      <Competence/>
      <GlobalStyles />
    </div>
  );
}

export default App;
