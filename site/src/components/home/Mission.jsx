import React from 'react'
import MissionStatement from "./MissionStatement"
import MissionItem from "./MissionItem"
import Handshake from "../../images/home/handshake.png"
import Diversity from "../../images/home/diversity.png"
import Group from "../../images/home/group.png"
import Button from "react-bootstrap/Button";

export default function Mission() {
    return (
    <div className="mission">
        <div className='mission-statement-container'>
            <MissionStatement/>
        </div>
        <div className="mission-item-container">
            <MissionItem className="mission-item mission--item-1" img={Handshake} alt="Handshake" text="Prepare Asian heritage scientists and engineers for success in the global business world" />
            <MissionItem className="mission-item mission--item-2" img={Diversity} alt="Diversity" text="Celebrate diversity on campuses and in the workplace" />
            <MissionItem className="mission-item mission--item-3" img={Group} alt="Group" text="Provide opportunities for members to make contributions to their local communities" />
        </div>
        <Button className="learn-more-btn" href="/about">Learn more</Button>
        {/*
        insert button linked to about page
        */}
    </div>
)
}
