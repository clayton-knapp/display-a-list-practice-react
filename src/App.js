
import './App.css';
// import your arrays here (and components)
import { guitarNames } from './data-files/guitar-names-data.js';
import GuitarNamesList from './GuitarNamesList.js';



function App() {


  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <GuitarNamesList guitarNames = {guitarNames}/>



    </div>
  );
}

export default App;
