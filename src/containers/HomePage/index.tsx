import React from 'react'

import { Banner } from '@/components'
import ProfileCard from './ProfileCard/loadable'
import { PortFolio, Skills, Experience } from './Contents/loadable'

import HomePageStyled from './styled'

const HomePage = () => {
  return (
    <HomePageStyled>
      <Banner />
      <div className="py-10 relative flex container">
        <div className="left-content">
          <ProfileCard />
        </div>
        <div className="right-content grow">
          <Skills />
          <Experience />
          <PortFolio />
        </div>
      </div>
    </HomePageStyled>
  )
}

export default HomePage
