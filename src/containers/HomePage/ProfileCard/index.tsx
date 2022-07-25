import React from 'react'

import { Banner, Card, ImageCircle, LinkTo } from '@/components'

import {
  imageProfileUrl,
  githubUrl,
  githubText,
  codepenText,
  codepenUrl,
  linkedInText,
  linkedInUrl,
  email,
  homeText,
  homeUrl,
  birthday,
} from '@/constants/profileInfo'

import ProfileCardStyled from './styled'

const ProfileCard = () => {
  return (
    <ProfileCardStyled>
      <Card className="profile-card flex flex-col fixed">
        <ImageCircle className="self-center mb-5" imageUrl={imageProfileUrl} />
        <div className="name-wrapper mb-6">
          <div className="text-xl font-semibold">Suppawit Satitsongtam</div>
          <div className="text-base font-semibold color-primary">Frontend Developer</div>
        </div>
        <div className="info-wrapper mb-6">
          <div className="link-wrapper email flex items-center mb-1">
            <span className="icon-email mr-2 text-2xl color-primary" />
            <LinkTo url={`mailto:${email}`} text={email} />
          </div>
          <div className="link-wrapper address flex items-center mb-1">
            <span className="icon-location mr-2 text-2xl color-primary" />
            <LinkTo url={homeUrl} text={homeText} />
          </div>
          <div className="link-wrapper address flex items-center mb-1">
            <span className="icon-birthday mr-2 text-2xl color-primary" />
            <LinkTo url="#" text={birthday} />
          </div>
        </div>
        <div className="social-url-wrapper">
          <div className="link-wrapper github flex items-center mb-1">
            <span className="icon-github mr-2 text-2xl color-primary" />
            <LinkTo url={githubUrl} text={githubText} />
          </div>
          <div className="link-wrapper codepen flex items-center mb-1">
            <span className="icon-codepen mr-2 text-2xl color-primary" />
            <LinkTo url={codepenUrl} text={codepenText} />
          </div>
          <div className="link-wrapper linkedin flex items-center mb-1">
            <span className="icon-linkedin mr-2 text-2xl color-primary" />
            <LinkTo url={linkedInUrl} text={linkedInText} />
          </div>
        </div>
      </Card>
    </ProfileCardStyled>
  )
}

export default ProfileCard
