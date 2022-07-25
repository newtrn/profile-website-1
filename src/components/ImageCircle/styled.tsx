import styled from 'styled-components'

import { ImageCircleProps } from '@/interfaces/components/ImageCircle'

export default styled.div<ImageCircleProps>`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-image: url(${(ImageCircleProps) => ImageCircleProps.imageUrl});
  border-radius: 100%;
`
