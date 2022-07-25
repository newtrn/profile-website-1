import React from 'react'

import { ContentFlipProps } from '@/interfaces/components/ContentFlip'

import ContentFlipStyled from './styled'

const ContentFlip = ({ content, flipContent }: ContentFlipProps) => (
  <ContentFlipStyled>
    <div className="content">
      <div className="front-content">{content}</div>
      <div className="flip-content">{flipContent}</div>
    </div>
  </ContentFlipStyled>
)

export default ContentFlip
