import styled from 'styled-components'

import { colors } from '@/constants/color'

export default styled.div`
  .grandient-line {
    width: 8px;
    height: 36px;
    background-image: linear-gradient(76deg, ${colors.tertiaryOrange} 0%, ${colors.secondaryOrange} 74%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 10px;
    transform: translate3d(0, -25px, 0);
  }
  .header-text {
    transform: translate3d(0, 25px, 0);
  }
`
