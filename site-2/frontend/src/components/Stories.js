import Slider from 'react-slick'
import Image from 'next/image'

import hero2 from 'public/images/hero2.jpg'
import cmsUtils from 'src/lib/cms-utils'

const Stories = ({ forwardRef, stories = [] }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 10000,
  }

  return (
    <div
      ref={forwardRef}
      className='w-full p-8 lg:h-content lg:h-min-[525px] lg:bg-gradient-to-r lg:from-white lg:from-45% lg:to-gray-100 lg:to-45% h-content h-min-[800px] bg-gradient-to-b from-white from-40% to-gray-100 to-40%'
    >
      <div className='grid gap-8 items-center container section h-full lg:grid-cols-2 lg:justify-items-start justify-items-center'>
        <div className='relative w-full h-[400px] overflow-hidden shadow-2xl'>
          <Image
            src={hero2}
            alt='empty'
            fill
            placeholder='blur'
            className='object-cover '
          />
        </div>
        <div className='w-full overflow-y-auto '>
          <h1>Stories</h1>
          <hr />
          <Slider {...settings}>
            {stories.map((story) => {
              return (
                <div key={story.id}>
                  <h4>{`${story.firstName} ${story.lastName}, ${story.years}`}</h4>
                  <h5 className='text-gray-500'>{story.location}</h5>
                  <br />
                  {story.content?.map((b) => cmsUtils.renderBlock(b))}
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Stories
