import React from 'react'
import Logo from "../../images/saseBranding/sasewhitelogoplustext.png"
import Networking from "../../images/misc/networking.jpeg"

export default function Hero() {
  return (
    <div className="hero">
        <img className="hero--background-image" src={Networking} alt="E-Board"></img>
        <img className="hero--foreground-image" src={Logo} alt="SASE logo" height="160rem"></img>
    </div>
  )
}
