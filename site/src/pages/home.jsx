import React from 'react'
import "../styles/home.css"
import Hero from '../components/home/Hero'
import MissionStatement from "../components/home/MissionStatement"
import MissionItem from "../components/home/MissionItem"
// import Handshake from "../../assets/images/homepage/handshake"
// import icons for mission items from assets

export default function home() {
    return (
    <div>
        <div className="hero">
            <Hero text="We are the Society of Asian Scientists and Engineers at USC."/>
        </div>
        <div className="mission">
            <MissionStatement header="Our mission" text="SASE at USC is dedicated to cultivating, promoting, and advocating for Asian heritage leadership in science and engineering in school and the workforce."/>
            <MissionItem text="Prepare Asian heritage scientists and engineers for success in the global business world" />
            <MissionItem text="Celebrate diversity on campuses and in the workplace" />
            <MissionItem text="Provide opportunities for members to make contributions to their local communities" />
            {/*
            insert button linked to about page
            */}
        </div>
        <div className="events">
            <p>temporary filler</p>
        </div>
    </div>
    )
}
