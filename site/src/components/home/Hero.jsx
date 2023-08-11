import React from 'react'
import Logo from "../../images/saseBranding/sasewhitelogoplustext.png"
import Networking from "../../images/misc/networking.jpeg"

export default function Hero() {
  return (
    <div className="hero">
        <img src={Networking} alt="networking" className="hero--background-image"></img>
        <img src={Logo} alt="SASE logo" height="160rem" className="hero--foreground-image"></img>
    </div>
  )
}
