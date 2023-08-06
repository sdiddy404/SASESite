import React from 'react'

export default function Mission(props) {
  return (
    <div className="mission--statement">
        <h1><strong>{props.header}</strong></h1>
        <p>{props.text}</p>
    </div>
  )
}
