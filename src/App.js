import logo from './logo.svg';
import './App.css';
import { ProductAndSolution } from './productSolution/ProdcuandSolution';
import { GlobalStyles } from './App.styled';

function App() {
  return (
    <div className="App">
    <GlobalStyles/>
    <ProductAndSolution/>
    </div>
  );
}

export default App;
