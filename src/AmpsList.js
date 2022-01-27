
import React from 'react';
import AmpItem from './AmpItem';

export default function AmpsList(props) {
  return <div>
    <h2>Amps:</h2>
    <div className='amp-list'>
      {
        props.amps.map((eachAmp, i) => 
          <AmpItem 
            key={`${eachAmp} - ${i}`} 
            {...eachAmp}
          />
        )
      }
    </div>
  </div>;
}
