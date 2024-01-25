import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './App.styled';
import { AssetManagment } from './assetmanagment/AssetManagment';

function App() {
  return (
    <div>
      <GlobalStyles/>
      <AssetManagment/>
    </div>
  );
}

export default App;
