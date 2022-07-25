import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@/components'

import { ProjectCardProps } from '@/interfaces/components/ProjectCard'

import { projects } from '@/constants/projects'

import ProjectCardsStyled, { ProjectCardStyled } from './styled'

const ProjectCard = ({ title, url, thumbnail }: ProjectCardProps) => {
  return (
    <ProjectCardStyled title={title} url={url} thumbnail={thumbnail}>
      <Link to={url} className="grow">
        <Card className="project-card">
          <div className="badge text-sm font-semibold px-3 py-2 absolute">
            <div className="text">{title}</div>
          </div>
        </Card>
      </Link>
    </ProjectCardStyled>
  )
}

const ProjectCards = () => {
  return (
    <ProjectCardsStyled className="grid">
      {projects.map((project) => (
        <ProjectCard title={project.name} url={project.url} thumbnail={project.thumbnail} />
      ))}
    </ProjectCardsStyled>
  )
}

export default ProjectCards
