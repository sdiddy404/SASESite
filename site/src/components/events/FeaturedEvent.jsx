import React from 'react'
import WRC_2022 from '../../images/misc/WRC_2022.jpg'

export default function FeaturedEvent() {
  return (
    <div className='featured-event flex-container'>
        <div className="featured-event--img-container flex-item">
          <img src={WRC_2022} alt="WRC 2022" className="featured-event--img"></img>
        </div>
        <div className="featured-event--text flex-item">
          <h1>West Regional Conference</h1>
          <h2>Spring 2024</h2>
          <p>The annual SASE West Regional Conference brings together more than 20 active chapters from the west coast for a series of speaker panels, professional/development workshops, and networking opportunities hosted by local and national companies.</p>
          <p>Participants get a unique opportunity to learn more about different fields and career paths and connect with peers and industry professionals on both a small and large scale.</p>
          <p>For any questions, contact us via email or any of our socials and we'll get back to you as soon as possible.</p>
        </div>
    </div>
  )
}
