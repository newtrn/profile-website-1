import React from 'react'
import clsx from 'clsx'

import { HeaderProps } from '@/interfaces/components/Header'

import HeaderStyled from './styled'

const Header = ({ text, className }: HeaderProps) => (
  <HeaderStyled className={clsx(className && className, 'text-2xl font-semibold mb-6 flex items-center')}>
    <div className="grandient-line" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="800" />
    <div className="header-text" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
      {text}
    </div>
  </HeaderStyled>
)

export default Header
