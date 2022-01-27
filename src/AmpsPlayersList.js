import React from 'react';

import AmpPlayerItem from './AmpPlayerItem';

export default function AmpsPlayersList(props) {
  return <div>
    <h3>Amps & Players:</h3>
    <div className='amps-players-list'>
      {
        props.ampsAndPlayers.map((eachAmpAndPlayers, i) =>
          <AmpPlayerItem 
            key={`${eachAmpAndPlayers} - ${i}`}
            {...eachAmpAndPlayers}
          />
        )
      }
    </div>
  </div>;
}
