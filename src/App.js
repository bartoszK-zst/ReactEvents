import logo from './logo.svg';
import './App.css';
import ClickButton from './components/ClickButton.js';
import User from './components/User.js'
import TextInput from './components/TextInput.js'

function App() {
  return (
    <div className="App">
      
      <ClickButton/>
      <ol>
        <li>
          <User firstName="Włodzimierz" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Kazimierz" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Bożydar" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Mierz" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Mieczysław" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Wojtek" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Kacper" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Jakub" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Albert" lastName="Kamień"/>
        </li>
        <li>
          <User firstName="Hubert" lastName="Kamień"/>
        </li>
      </ol>
      
    </div>
  );
}

export default App;
