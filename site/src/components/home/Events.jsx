import React from "react";
import Button from 'react-bootstrap/Button';
import Retreat from "../../images/misc/Retreat_2023.jpg";

export default function Events() {
  return (
    <div className="events">
      <div className="events-container">
        <div className="events-item events--item-1">
          <h1 style={{ fontWeight: "bold" }}>Events</h1>
          <p className="events--text">
            We hold a variety of professional and social events as well as
            development programming for our members. Learn more about upcoming
            events, SASE conferences and more on our Events page.
          </p>
          <Button className="learn-more-btn" href="/events">Learn more</Button>
        </div>
        <div className="events-item events--item-2">
          <img src={Retreat} alt="Retreat" className="events--img"></img>
        </div>
      </div>
    </div>
  );
}
