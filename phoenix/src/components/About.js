import React from 'react'

const About = ({ scrollRef }) => {
  return (
    <div ref={scrollRef} className='container layout text-center'>
      <h1 className='mb-6'>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ex
        quam, eget ultrices lacus cursus eu. In tempor odio ut accumsan auctor. Donec
        massa ante, lobortis a sapien sed, ultricies feugiat velit. Quisque volutpat dui
        ac libero tempor, ac ultrices ligula consequat. Morbi ullamcorper egestas odio, ut
        finibus metus efficitur id. Sed malesuada ante non leo ornare, id consectetur
        mauris sollicitudin. Ut interdum tellus nec erat imperdiet, eget interdum mauris
        imperdiet. Etiam pharetra sem eros, nec tincidunt velit dictum sed.
      </p>
      <p>
        Curabitur gravida enim quis placerat tincidunt. Morbi tempor, quam ut sollicitudin
        malesuada, urna nunc aliquet sapien, ac ultrices nibh leo ac sapien. Vivamus vel
        orci dolor. Nullam vel mi quis orci auctor lacinia vitae congue sem. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nullam massa odio, mattis ut aliquam
        tincidunt, vestibulum et massa. Sed in condimentum nulla, et efficitur velit. Sed
        in interdum ante, quis gravida ex.
      </p>
    </div>
  )
}

export default About
