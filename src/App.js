import { AdvantagePage } from "./AdvantagePage/AdvantagePage";
import "./App.css";
import { GlobalStyles } from "./App.styled";
import { AssetManagementHomePage } from "./AssetmanagmentHomeSection/AssetmanagmentHome";
import { Advantagespage } from "./Cards/Card";
import { Competence } from "./Competence/Competence";
import { FooterPage } from "./Footer/FooterPage";
import { AssetManagment } from "./assetmanagment/AssetManagment";
import { Contact } from "./contact/contact";
import { ProductAndSolution } from "./productSolution/ProdcuandSolution";
import { WealthManagment } from "./wealthmanagmnet/Wealthmanagment";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AssetManagment />
      {/* <AssetManagementHomePage /> */}
      {/* <Competence /> */}
      {/* <ProductAndSolution /> */}
      {/* <Advantagespage /> */}
      {/* <Contact /> */}
      {/* <FooterPage /> */}
    </div>
  );
}

export default App;
