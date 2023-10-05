import { animated, useTransition } from '@react-spring/web'

const Services = () => {
  const transitions = useTransition(serviceItems, {
    from: {
      transform: 'translate3d(-50px, 0, 0)',
      opacity: 0,
    },
    enter: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    trail: 150,
  })

  return (
    <div className='container section text-center space-y-12'>
      <section>
        <span className='text-blue-500'>justo eget magna fermentum</span>
        <h2>Integer Vitae Justo eget Magna</h2>
      </section>
      <div className='grid lg:grid-cols-3 gap-16'>
        {transitions((style, item) => (
          <animated.div style={style}>{item}</animated.div>
        ))}
      </div>
    </div>
  )
}

const serviceItems = [
  <div key={'service-1'} className='flex text-start'>
    <div className='p-6'>
      <h3>Service 1</h3>
      <hr />
      <p>
        Semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate
        eu scelerisque.
      </p>
    </div>
  </div>,
  <div key={'service-2'} className='flex text-start'>
    <div className='p-6'>
      <h3>Service 2</h3>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non.</p>
    </div>
  </div>,
  <div key={'service-3'} className='flex text-start'>
    <div className='p-6'>
      <h3>Service 3</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus
        vehicula turpis, eu eleifend lorem scelerisque a. Quisque sed turpis.
      </p>
    </div>
  </div>,
]

export default Services
