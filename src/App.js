import logo from './logo.svg';
import './App.css';
import PantallaConsultarEncuesta from './Components/PantallaConsultarEncuesta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PantallaConsultarEncuesta />
      </header>
    </div>
  );
}

export default App;
