import React from 'react'
import Hero from '../components/home/Hero'
import Carousel from "../components/home/Carousel3";
import Mission from '../components/home/Mission'
import Events from '../components/home/Events'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/home.css"

export default function home() {
    return (
        <main>
            <NavBar />
            <Hero />
            <Carousel />
            <Mission />
            <Events />
            <Footer />
        </main>
    )
}
