import React from 'react'
import Logo from "../../images/saseBranding/sasewhitelogoplustext.png"
import Networking from "../../images/misc/networking.jpeg"

export default function Hero() {
  return (
    <div className="hero">
      <div className='hero--background'></div>
        {/* <img className='hero--foreground-img' src={Logo} alt="Logo" height="200rem"></img> */}
        <div className='hero--foreground'>
          <img src={Logo} alt="Logo" width="50%"></img>
          <p>We are the Society of Asian Scientists and Engineers at USC.</p>
        </div>
    </div>
  )
}
