import React, { useState } from 'react'
import clsx from 'clsx'

import { Header, ContentFlip, ProgressBar, Card } from '@/components'

import { skills } from '@/constants/skills'

import { SkillsStyled } from './ContentsStyled'

const Skills = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <SkillsStyled className="mb-5">
      {/* <Header text="Skills" /> */}
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={clsx(isHovering && 'hover')}>
        <Card className="skill-container">
          <Header text="Skills" />
          <div className="grid skill-wrapper">
            {skills.map((skill) => (
              <ContentFlip
                content={<span className={skill.icon} />}
                flipContent={
                  <div className="flex flex-col items-center">
                    <div className="font-semibold mb-2">{skill.name}</div>
                    <div className="proficient">
                      <ProgressBar percentage={skill.proficient} />
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        </Card>
      </div>
    </SkillsStyled>
  )
}

export default Skills
