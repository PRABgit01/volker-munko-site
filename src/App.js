import logo from './logo.svg';
import './App.css';
import { ProductAndSolution } from './productSolution/ProdcuandSolution';
import { GlobalStyles } from './App.styled';
import { Advantagespage } from './Cards/Card';
import { FooterPage } from './Footer/FooterPage';

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <Advantagespage/>
    <ProductAndSolution/>
    <FooterPage/>
    </div>
  );
}

export default App;
