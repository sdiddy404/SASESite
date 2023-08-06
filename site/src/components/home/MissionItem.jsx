import React from 'react'

export default function MissionItem(props) {
  return (
    <div className={props.className}>
      <img src={props.img}></img>
      <p>{props.text}</p>
    </div>
  )
}
