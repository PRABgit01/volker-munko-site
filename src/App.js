import "./App.css";
import { Container, GlobalStyles } from "./App.styled";
import { AssetManagementHomePage } from "./AssetmanagmentHomeSection/AssetmanagmentHome";
import { Competence } from "./Competence/Competence";
import { Contact } from "./contact/contact";

function App() {
  return (
    <div>
        <GlobalStyles />
        <AssetManagementHomePage />
        <Competence />
        <Contact />
    </div>
  );
}

export default App;
