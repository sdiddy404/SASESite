import React from 'react'

export default function MissionItem(props) {
  return (
    <div className="mission--item">
      <img src={props.img}></img>
      <p>{props.text}</p>
    </div>
  )
}
