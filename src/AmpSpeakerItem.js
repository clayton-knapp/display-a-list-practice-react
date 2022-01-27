import React from 'react';

export default function AmpSpeakerItem({ make, model, img_url, speaker }) {



  return <div className='amp-item'>
    <h3>{make} {model}</h3>
    <img src={img_url}/>
    <div className='speaker'>
      <h4>{speaker.make} {speaker.model}</h4>
      <img src={speaker.img_url} />
    </div>
  </div>;
}

