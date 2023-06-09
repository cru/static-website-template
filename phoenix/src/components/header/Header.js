import React, { useEffect, useState } from 'react'

import { isMobile } from '../../constants'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export const Header = (props) => {
  const [headerTransparent, setHeaderTransparent] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) setHeaderTransparent(false)
      else setHeaderTransparent(true)
    })
  }, [])

  return (
    <div className={headerTransparent ? 'header' : 'header header-light'}>
      <div className='container'>
        {isMobile ? (
          <MobileHeader handleClick={props.scrollTo} />
        ) : (
          <DesktopHeader handleClick={props.scrollTo} />
        )}
      </div>
    </div>
  )
}
