
import './App.css';
// import your arrays here (and components)
import { guitarNames } from './data-files/guitar-names-data.js';
import GuitarNamesList from './GuitarNamesList.js';

import { amps } from './data-files/amps-data.js';
import AmpsList from './AmpsList';



function App() {

  // console.log(amps);

  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <GuitarNamesList guitarNames = {guitarNames}/>
      <AmpsList amps = {amps}/>



    </div>
  );
}

export default App;
