import React from 'react'
import clsx from 'clsx'

import { LinkToProps } from '@/interfaces/components/LinkTo'

import LinkToStyled from './styled'

const LinkTo = ({ url, text, className }: LinkToProps) => (
  <LinkToStyled href={url} target="_blank" className={clsx(className && className)}>
    {text}
  </LinkToStyled>
)

export default LinkTo
