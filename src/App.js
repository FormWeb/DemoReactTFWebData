import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import ConditionalRendering from './components/conditional-rendering/conditional-rendering';
import Products from './components/products/products';
import { nanoid } from "nanoid"
import Event from './components/event/event';
import StateHook from './components/state-hook/state-hook';


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
      <h1>Demo Event</h1>
      <Event></Event>
      <h1>Demo State</h1>
      <StateHook/>
    </div>
  );
}

export default App;
