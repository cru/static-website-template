import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Slider from 'react-slick'

const Announcements = ({ announcements = [] }) => {
  const router = useRouter()
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2500,
    pauseOnFocus: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    announcements.length > 0 && (
      <div className=' bg-gray-50'>
        <Slider {...sliderSettings} className='w-[90%] m-auto'>
          {announcements.map((e) => (
            <div
              className='text-center w-full p-1 cursor-pointer'
              onClick={() => router.push(`/announcement/${e.slug}`)}
            >
              <span>{e.shortHeader}</span>
              <br />
              <small className='text-gray-500'>Click here for more info</small>
            </div>
          ))}
        </Slider>
      </div>
    )
  )
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <ChevronRightIcon
      className={`${className} h-6 w-6 text-black hover:text-black`}
      style={style}
      onClick={onClick}
    />
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <ChevronLeftIcon
      className={`${className} h-6 w-6 text-black hover:text-black`}
      style={style}
      onClick={onClick}
    />
  )
}

export default Announcements
