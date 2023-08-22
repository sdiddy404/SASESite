import React from 'react'

export default function MissionItem(props) {
  return (
    <div className={props.className}>
      <img src={props.img} alt={props.alt} className="mission-item--img"></img>
      <p className="mission-item--p fade-in">{props.text}</p>
    </div>
  )
}
