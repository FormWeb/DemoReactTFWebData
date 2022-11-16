import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';


function App() {
  // Logique
  return (
    <div className="App">
      <h1>Bonjour</h1>
      <Welcome nom="William" nomDeFamille="Genard" taille={171}/>
      <Welcome nom="Jacques" nomDeFamille="Jules"/>
    </div>
  );
}

export default App;
