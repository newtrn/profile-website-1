import React from 'react'

import { Header, Card } from '@/components'

import { experiences } from '@/constants/experiences'

import { ExperienceStyled } from './ContentsStyled'

const Experience = () => (
  <ExperienceStyled className="mb-5">
    {/* <Header text="Experience" /> */}
    <Card className="experience-container">
      <Header text="Experiences" />
      {experiences.map((experience) => (
        // <Card className="experience-card mb-5">
        <div className="experience-wrapper mb-3">
          <div className="name text-xl font-semibold">{experience.name}</div>
          <div className="position text-base font-semibold">{experience.position}</div>
          <div className="des">{experience.des}</div>
        </div>
        // </Card>
      ))}
    </Card>
  </ExperienceStyled>
)

export default Experience
