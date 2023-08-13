import React from 'react'
import FeaturedEvent from '../components/events/FeaturedEvent'
import UpcomingEvents from '../components/events/UpcomingEvents'
import "../styles/events.css"

export default function events() {
  return (
    <main>
      <FeaturedEvent />
      <UpcomingEvents />
    </main>
  )
}
