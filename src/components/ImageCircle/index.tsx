import React from 'react'
import clsx from 'clsx'

import { ImageCircleProps } from '@/interfaces/components/ImageCircle'

import ImageCircleStyled from './styled'

const ImageCircle = ({ imageUrl, className }: ImageCircleProps) => <ImageCircleStyled imageUrl={imageUrl} className={clsx(className && className)} />

export default ImageCircle
