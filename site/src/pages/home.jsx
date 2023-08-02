import React from 'react'
import "../styles/home.css"
import Hero from '../components/home/Hero'
import MissionStatement from "../components/home/MissionStatement"
import MissionItem from "../components/home/MissionItem"
import Handshake from "../images/home/handshake.png"
import Diversity from "../images/home/diversity.png"
import Group from "../images/home/group.png"
// import icons for mission items from assets

export default function home() {
    return (
    <div>
        <div className="hero">
            <Hero text="We are the Society of Asian Scientists and Engineers at USC."/>
        </div>
        <div className='carousel '>
        {/**insert carousel code from sam */}
            <p>carousel placeholder</p>
        </div>
        <div className="mission">
            <MissionStatement header="Our mission" text="SASE at USC is dedicated to cultivating, promoting, and advocating for Asian heritage leadership in science and engineering in school and the workforce."/>
            <MissionItem img={Handshake} text="Prepare Asian heritage scientists and engineers for success in the global business world" />
            <MissionItem img={Diversity} text="Celebrate diversity on campuses and in the workplace" />
            <MissionItem img={Group} text="Provide opportunities for members to make contributions to their local communities" />
            {/*
            insert button linked to about page
            */}
        </div>
        <div className="events">
            <h4><strong>Events</strong></h4>
            <p>We hold a variety of social and professional events for our members as well as development programming. Here are some of our upcoming events.</p>
            {/*
            include carousel of event pics
            */}
            {/*
            include button to events page
            */}
        </div>
    </div>
    )
}
