import React from 'react'

import { Header, Card } from '@/components'

import ProjectCards from '../ProjectCard/loadable'

import { PortFolioStyled } from './ContentsStyled'

const PortFolio = () => (
  <PortFolioStyled className="mb-5">
    <Card>
      <Header text="Portfolio" />
      <ProjectCards />
    </Card>
  </PortFolioStyled>
)

export default PortFolio
