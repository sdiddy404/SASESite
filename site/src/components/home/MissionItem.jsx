import React from 'react'

export default function MissionItem(props) {
  return (
    <div className={props.className}>
      <img src={props.img} alt={props.alt} className="mission-item--img"></img>
      <p className="mission-item--p">{props.text}</p>
    </div>
  )
}
