import React from 'react'
import Navbar from '../commonComponents/Navbar/Navbar'
import Footer from '../commonComponents/Footer/Footer'
import AboutHero from './AboutHero'
import Foundation from './Foundation'
import LeadershipTeam from './Leadership'
import OurJourney from './Journey'
import Credentials from './Credentials'
import PartnerCTA from './Partner'

function AboutUs() {
  return (
    <>
        <AboutHero/>
        <Foundation/>
        <LeadershipTeam/>
        <OurJourney/>
        <Credentials/>
        <PartnerCTA/>
        <Footer />
    </>
  )
}

export default AboutUs