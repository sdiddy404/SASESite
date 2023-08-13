import React from 'react'
import Hero from '../components/home/Hero'
import Carousel from '../components/home/Carousel'
import Mission from '../components/home/Mission'
import Events from '../components/home/Events'
import "../styles/home.css"

export default function home() {
    return (
        <main>
            <Hero />
            {/* <Carousel /> */}
            <Mission />
            <Events />
        </main>
    )
}
