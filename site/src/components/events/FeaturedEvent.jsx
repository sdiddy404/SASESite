import React from 'react'

export default function FeaturedEvent(props) {
  return (
    <div>
      <img src={props.img} alt="WRC 2022 pic1100 Exposition Blvd Unit 2" className="featured-event--image" width="500em"></img>
      <div className="featured-event--text">
        <h1>{props.header}</h1>
        <p>{props.subheader}</p>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
      </div>
    </div>
  )
}
