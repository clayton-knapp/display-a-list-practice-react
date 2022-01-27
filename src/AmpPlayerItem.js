import React from 'react';
import PlayersList from './PlayersList';

export default function AmpPlayerItem({ make, model, img_url, famousPlayers }) {

  // console.log(props);

  return <div className='amp-item'>
    <h3>{make} {model}</h3>
    <img src={img_url}/>
    <PlayersList famousPlayers={famousPlayers} />


  </div>;
}
