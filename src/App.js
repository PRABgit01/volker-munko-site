import './App.css';
import { Container, GlobalStyles } from './App.styled';
import { FooterPage } from './Footer/FooterPage';
import { WealthManagement } from './wealthmanagmnet/Wealthmanagment';
import { Advantagespage } from './Cards/Card';

function App() {
  return (
    <div >
      <GlobalStyles/>
      <Advantagespage/>
      <WealthManagement/>
      <FooterPage/>
    </div>
  );
}

export default App;
