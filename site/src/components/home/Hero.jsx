import React from 'react'
import Logo from "../../images/saseBranding/sasewhitelogoplustext.png"
import Networking from "../../images/misc/networking.jpeg"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero--background-image"><img src={Networking} alt="networking"></img></div>
      <div className="hero--foreground-image"><img src={Logo} alt="SASE logo" height="160rem"></img></div>
    </div>
  )
}
