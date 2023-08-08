import React from 'react'
import FeaturedEvent from '../components/events/FeaturedEvent'
import UpcomingEvents from '../components/events/UpcomingEvents'
import WRC from "../images/misc/WRC_2022.jpg"
import "../styles/events.css"

export default function events() {
  return (
    <div>
        {/** featured event */}
        <div className="featured-event">
            {/* <p>featured events</p> */}
            <FeaturedEvent img={WRC} 
            header="Featured: West Regional Conference" 
            subheader="Spring 2024"
            p1="The annual SASE West Regional Conference brings together more than 20 active chapters from the west coast for a series of speaker panels, professional/development workshops, and networking opportunities hosted by local and national companies."
            p2="Participants get a unique opportunity to learn more about different fields and career paths and connect with peers and industry professionals on both a small and large scale."
            p3="For any questions, contact us via email or any of our socials and we'll get back to you as soon as possible."
            />
        </div>

        {/** upcoming events */}
        <div className="upcoming-events">
            <UpcomingEvents />
        </div>
    </div>
  )
}
