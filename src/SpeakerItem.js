import React from 'react';

export default function SpeakerItem(props) {
  return <div className='speaker-item'>
    <h4>{props.speaker.make} {props.speaker.model}</h4>
    <img src={props.speaker.img_url} />
  </div>;
}
