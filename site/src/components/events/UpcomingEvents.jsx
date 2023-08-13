import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

export default function UpcomingEvents() {
  return (
    <div className='upcoming-events flex-container'>
        <div className='flex-item upcoming-events--instagram-container'>
          <InstagramEmbed className="upcoming-events--instagram" url="https://www.instagram.com/p/CreoZmjPuHe/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==" width="100%" height="70%"/>
        </div>
        <div className='flex-item upcoming-events--text'>
          <h1 className='upcoming-events--header'>Upcoming Events</h1>
          <p className='upcoming-events--subheader'>Kick of the semester right and get to know us by speaking with current board members or click the button below to learn more about SASE!</p>
          {/*
          include button linking to mailing list sign up 
          */}
        </div>
    </div>
  )
}

