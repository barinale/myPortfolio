import './App.css';
import { Header } from './Components/header/Header';
import { Main } from './Pages/Main';
import { AllRouter } from './Router/AllRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRouter />
    </div>
  );
}

export default App;
