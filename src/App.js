import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import ConditionalRendering from './components/conditional-rendering/conditional-rendering';
import Products from './components/products/products';
import { nanoid } from "nanoid"


function App() {
  // Logique
  const products = [
    {id: nanoid(), name: "Banane"},
    {id: nanoid(), name: "Pomme"},
    {id: nanoid(), name: "Poire"},
  ]

  return (
    <div className="App">
      <h1>Demo Component</h1>
      <Welcome nom="William" nomDeFamille="Genard" taille={171}/>
      <h1>Demo Conditional Rendering</h1>
      <ConditionalRendering msg="Mon message" error={false}/>
      <h1>Demo Liste</h1>
      <Products products={products}/>
    </div>
  );
}

export default App;
