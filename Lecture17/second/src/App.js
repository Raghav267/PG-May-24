import './App.css';
import Greet from './Components/Greet';

function App() {


  const name = "Muskan"
  const age = 23;
  return (
    <>
      <Greet name={name} age={age}></Greet>


    </>


  )
}

export default App;
