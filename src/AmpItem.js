import React from 'react';

export default function AmpItem({ make, model, img_url }) {
  return <div className='amp-item'>
    <h3>{make} {model}</h3>
    <img src={img_url}/>
  </div>;
}
