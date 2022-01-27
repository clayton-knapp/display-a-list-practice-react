import React from 'react';
import GuitarNameItem from './GuitarNameItem';

export default function GuitarNamesList(props) {
  return <div>
    <h2>Guitar Names:</h2>
    {
      props.guitarNames.map((eachGuitar, i) => 
        <GuitarNameItem 
          key={`${eachGuitar} - ${i}`} 
          name={eachGuitar}
        />
      )
    }
  </div>;
}
