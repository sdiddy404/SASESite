import React from 'react'

export default function Mission(props) {
  return (
    <div className="mission--statement">
        <h2><strong>{props.header}</strong></h2>
        <p>{props.text}</p>
    </div>
  )
}
