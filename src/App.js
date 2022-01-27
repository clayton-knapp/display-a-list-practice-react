
import './App.css';
// import your arrays here (and components)
import { guitarNames } from './data-files/guitar-names-data.js';
import GuitarNamesList from './GuitarNamesList.js';

import { amps } from './data-files/amps-data.js';
import AmpsList from './AmpsList';

import { ampsAndSpeakers } from './data-files/amps-speakers-data.js';
import AmpsSpeakersList from './AmpsSpeakersList.js';

import { ampsAndPlayers } from './data-files/amps-players-data.js';
import AmpsPlayersList from './AmpsPlayersList';



function App() {

  // console.log(amps);

  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <GuitarNamesList guitarNames = {guitarNames}/>
      <AmpsList amps = {amps}/>
      <AmpsSpeakersList ampsAndSpeakers = {ampsAndSpeakers} />
      <AmpsPlayersList ampsAndPlayers = {ampsAndPlayers} />
    </div>
  );
}

export default App;
