import logo from './logo.svg';
import FizzBuzz from './Components/FizzBuzz';
import './App.css';

function App() {
  const inputNumber = prompt('How many numbers do u want to see? less than')

  return (
    <div className="App">
      <header className="App-header">

        <FizzBuzz inputNum={inputNumber}></FizzBuzz>
      </header>
    </div>
  );
}

export default App;
