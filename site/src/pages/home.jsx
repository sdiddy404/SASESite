import React from 'react'
import "../styles/home.css"
import Hero from '../components/home/Hero'
import Carousel from '../components/home/Carousel'
import Mission from '../components/home/Mission'
import Events from '../components/home/Events'

export default function home() {
    return (
        <main>
            <Hero />
            <Carousel />
            <Mission />
            <Events />
        </main>
    )
}
