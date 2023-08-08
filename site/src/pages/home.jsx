import React from 'react'
import "../styles/home.css"
import Hero from '../components/home/Hero'
import Carousel from '../components/home/Carousel'
import MissionStatement from "../components/home/MissionStatement"
import MissionItem from "../components/home/MissionItem"
import Handshake from "../images/home/handshake.png"
import Diversity from "../images/home/diversity.png"
import Group from "../images/home/group.png"
// import icons for mission items from assets

export default function home() {
    return (
    <div>
        {/** hero */}
        <div className="hero">
            <Hero />
        </div>

        {/** carousel */}
        <div className='carousel '>
        {/**insert carousel code from sam */}
            {/* <p>carousel placeholder</p> */}
            <Carousel />
        </div>

        {/** mission */}
        <div className="mission">
            <MissionStatement header="Our mission" text="SASE at USC is dedicated to cultivating, promoting, and advocating for Asian heritage leadership in science and engineering in school and the workforce."/>
            <div className="mission--flexbox-container">
                <MissionItem className="mission--flexitem mission--item--1" img={Handshake} text="Prepare Asian heritage scientists and engineers for success in the global business world" />
                <MissionItem className="mission--flexitem mission--item--2" img={Diversity} text="Celebrate diversity on campuses and in the workplace" />
                <MissionItem className="mission--flexitem mission--item--3" img={Group} text="Provide opportunities for members to make contributions to their local communities" />
            </div>
            {/*
            insert button linked to about page
            */}
        </div>

        {/** events */}
        <div className="events">
            <div className="events--flex-item-1">
                <h1><strong>Events</strong></h1>
                <p>We hold a variety of social and professional events for our members as well as development programming. Here are some of our upcoming events.</p>
                {/*
                include button to events page
                */}
            </div>
            <div className="events--flex-item-2">   
                <p>placeholder</p>
                {/*
                include carousel of event pics
                */}
            </div>
        </div>
    </div>
    )
}
