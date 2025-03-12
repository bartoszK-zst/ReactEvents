import logo from './logo.svg';
import './App.css';
import ClickButton from './components/ClickButton.js';
import User from './components/User.js'
import TextInput from './components/TextInput.js'

function App() {
  const Users = [
    {id: 1, firstName: "Włodzimierz", lastName: "Kamień"},
    {id: 2, firstName: "Kazimierz", lastName: "Kamień"},
    {id: 3, firstName: "Bożydar", lastName: "Kamień"},
    {id: 4, firstName: "Mierz", lastName: "Kamień"},
    {id: 5, firstName: "Mieczysław", lastName: "Kamień"},
    {id: 6, firstName: "Wojtek", lastName: "Kamień"},
    {id: 7, firstName: "Kacper", lastName: "Kamień"},
    {id: 8, firstName: "Jakub", lastName: "Kamień"},
    {id: 9, firstName: "Albert", lastName: "Kamień"},
    {id: 10, firstName: "Hubert", lastName: "Kamień"}
    ];

  return (
    <div className="App">
      
      
      <ClickButton/>
      <ol>
        <li>
          {Users.map((user) => <User key={user.id} firstName={user.firstName} lastName={user.lastName}/>)}
        </li>
      </ol>
      
    </div>
  );
}

export default App;
