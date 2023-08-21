import React from 'react'
import Retreat from '../../images/misc/Retreat_2023.jpg'

export default function Events() {
  return (
    <div className="events">
      <div className="events-container">
        <div className="events-item events--item-1">
              <h1><strong>Events</strong></h1>
              <p>We hold a variety of social and professional events for our members as well as development programming. Here are some of our upcoming events.</p>
              {/*
              include button to events page
              */}
          </div>
          <div className="events-item events--item-2">   
              <img src={Retreat} alt="Retreat" className="events--img"></img>
          </div>
      </div>
    </div>
  )
}
