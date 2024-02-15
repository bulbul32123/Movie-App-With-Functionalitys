import React from 'react'
import LogoCloud from '../logosection/LogoCloud'
import Stats from '../teamsection/Stats'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contact/Contact'

export default function OtherSections() {
  return (
    <div>
      <LogoCloud/>
      <div className="mt- mb-36">
      <Stats />
      </div>
      <Testimonials />
      <Contact />
    </div>
  )
}
