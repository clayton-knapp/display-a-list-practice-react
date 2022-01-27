
import React from 'react';
import AmpSpeakerItem from './AmpSpeakerItem';

export default function AmpsSpeakersList(props) {


  return <div>
    <h2>Amps and Speakers:</h2>
    <div className='amps-speakers-list'>
      {
        props.ampsAndSpeakers.map((eachAmpAndSpeaker, i) =>
          <AmpSpeakerItem 
            key={`${eachAmpAndSpeaker} - ${i}`}
            {...eachAmpAndSpeaker}
          />
        )
      }
    </div>
  </div>;
}
