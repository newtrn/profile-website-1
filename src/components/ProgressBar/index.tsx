import React from 'react'

import { ProgressBarProps } from '@/interfaces/components/ProgressBar'

import ProgressBarStyled from './styled'

const ProgressBar = ({ percentage }: ProgressBarProps) => <ProgressBarStyled percentage={percentage} />

export default ProgressBar
