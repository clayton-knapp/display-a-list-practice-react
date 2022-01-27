import React from 'react';
import PlayerItem from './PlayerItem';

export default function PlayersList({ famousPlayers }) {
  return <div>
    <h4>Famous Players: </h4>
    {
      famousPlayers.map((eachPlayer, i) => 
        <PlayerItem 
          key={`${eachPlayer} - ${i}`}
          famousPlayer={eachPlayer}
        />

      )
    }
  </div>;
}
