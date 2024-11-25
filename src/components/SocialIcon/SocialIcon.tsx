import React from 'react'
import facebookDark from '@assets/facebook-dark.svg'
import facebookLight from '@assets/facebook-light.svg'
import instagramDark from '@assets/instagram-dark.svg'
import instagramLight from '@assets/instagram-light.svg'
import linkedinDark from '@assets/linkedin-dark.svg'
import linkedinLight from '@assets/linkedin-light.svg'
import twitterDark from '@assets/twitter-dark.svg'
import twitterLight from '@assets/twitter-light.svg'

export interface SocialIconProps {
  name: 'twitter' | 'instagram' | 'facebook' | 'linkedin'
  bgColor?: 'dark' | 'light'
  className?: string
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, bgColor = 'light', className }) => {
  const isBgDark = bgColor === 'dark'

  const iconPaths = {
    twitter: {
      light: twitterLight,
      dark: twitterDark,
    },
    instagram: {
      light: instagramLight,
      dark: instagramDark,
    },
    facebook: {
      light: facebookLight,
      dark: facebookDark,
    },
    linkedin: {
      light: linkedinLight,
      dark: linkedinDark,
    },
  }

  const iconSrc = iconPaths[name]?.[isBgDark ? 'dark' : 'light']

  if (!iconSrc) {
    return null
  }

  return (
    <img
      src={iconSrc}
      alt={name}
      className={`w-4 h-4 ${className}`}
    />
  )
}
