import React from 'react';

import SpeakerItem from './SpeakerItem';

export default function AmpSpeakerItem({ make, model, img_url, speaker }) {



  return <div className='amp-item'>
    <h3>{make} {model}</h3>
    <img src={img_url}/>
    <SpeakerItem speaker={speaker}/>
  </div>;
}

