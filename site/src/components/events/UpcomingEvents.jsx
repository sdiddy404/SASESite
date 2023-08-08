import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

export default function UpcomingEvents() {
  return (
    <div>
        <h1 className='upcoming-events--header'>Upcoming Events</h1>
        <p className='upcoming-events--subheader'>Kick of the semester right and get to know us by speaking with current board members to learn more SASE!</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CreoZmjPuHe/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==" width={328} />
        </div>
    </div>
  )
}

