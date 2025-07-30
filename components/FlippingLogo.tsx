import React from 'react'
import Link from 'next/link'
import Image from 'next-image-export-optimizer'

interface FlippingLogoProps {
  frontImage?: string
  backImage?: string
  sizeClass?: string
  className?: string
  href?: string
  ariaLabel?: string
  borderType?: 'gradient' | 'round' // New prop for border style
}

const FlippingLogo: React.FC<FlippingLogoProps> = ({
  frontImage = '/CyberStation.png', // This should show first (before hover)
  backImage = '/Oliverchill.png', // This should show on hover (after flip)
  sizeClass = 'h-24 w-24',
  className = '',
  href = '/',
  ariaLabel = 'Home',
  borderType = 'gradient', // Default to gradient border
}) => {
  const borderClass = borderType === 'round' ? 'avatar-round' : ''

  const logoElement = (
    <div className={`logo-flip-container ${sizeClass} ${className}`}>
      <div className="logo-flip-card">
        <div className={`logo-flip-face logo-flip-front ${borderClass}`}>
          <Image
            src={frontImage}
            alt="Logo Front"
            width={96}
            height={96}
            className=""
            placeholder="blur"
            priority={true}
          />
        </div>
        <div className={`logo-flip-face logo-flip-back ${borderClass}`}>
          <Image
            src={backImage}
            alt="Logo Back"
            width={96}
            height={96}
            className=""
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="block">
        {logoElement}
      </Link>
    )
  }

  return logoElement
}

export default FlippingLogo
