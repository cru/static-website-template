import React from 'react'

export const About = (props) => {
  return (
    <div
      ref={props.aboutRef}
      className='container section text-center'
      style={{ minHeight: '35vh' }}
    >
      <h1>About Us</h1>
      <h5>Academic spinal surgeons treating patients across Alberta. </h5>
      <p>
        The Alberta Spine Foundation was established circa 2010. We are an Alberta based
        surgical group providing care along the entire spectrum of spinal disorders. As
        such our recognition of the significant impact spinal disease has on the lives of
        Albertan’s led to the belief in the need for more research to foster best outcomes
        for Albertan’s. Our unique perspective helped create a foundation based upon the
        principles of promoting high quality research, locally based, that have a tangible
        benefit.
      </p>
    </div>
  )
}
