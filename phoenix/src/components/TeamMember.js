import React from 'react'

export const TeamMember = (props) => {
  const { fileName, name, credentials, classes } = props

  return (
    <div className='text-center'>
      <picture>
        <source srcSet={`/images/team/${fileName}.webp`} type='image/webp' />
        <img srcSet={`/images/team/${fileName}.jpg`} alt='portrait' className={classes} />
      </picture>
      <div style={{ marginTop: '1rem' }}>
        <h4>{name}</h4>
        <span>{credentials}</span>
      </div>
    </div>
  )
}
