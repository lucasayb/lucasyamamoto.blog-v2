import React from 'react';

import Icons from './Icons';

import * as S from './styled'

import { socialLinks } from './content'

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      {socialLinks.map((socialLink, key) => {
        const Icon = Icons[socialLink.name];
        return (
          <S.SocialLinkItem
            target="_blank"
            title={socialLink.name}
            href={socialLink.link}
            key={key}
            rel="noopener noreferrer nofollow"
          >
            <S.SocialLinkItemIconWrapper><Icon /></S.SocialLinkItemIconWrapper>
          </S.SocialLinkItem>
        )
      })}
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks;