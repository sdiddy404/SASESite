import React from 'react'

export default function Mission(props) {
  return (
    <div className="mission--statement">
        <h3>{props.header}</h3>
        <p>{props.text}</p>
    </div>
  )
}
