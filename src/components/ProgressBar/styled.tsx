import styled from 'styled-components'
import { colors } from '@/constants/color'
import { ProgressBarProps } from '@/interfaces/components/ProgressBar'

export default styled.div<ProgressBarProps>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${colors.greyBg};
  border-radius: 15px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(ProgressBarProps) => ProgressBarProps.percentage}%;
    background-image: linear-gradient(315deg, ${colors.tertiaryOrange} 0%, ${colors.secondaryOrange} 74%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;
  }
`
