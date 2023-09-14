import Image from 'next/image'

import heroImg from 'public/images/hero.jpg'
import logoImg from 'public/images/logoipsum.svg'

const Banner = () => {
  return (
    <div className='w-full p-8 lg:h-content lg:min-h-[525px] lg:bg-gradient-to-r lg:from-gray-800 lg:from-10% lg:via-brand lg:via-55% lg:to-white lg:to-55% h-content h-min-[800px] bg-gradient-to-t from-white from-30% via-brand via-30% to-gray-800'>
      <div className='grid gap-8 items-center container section h-full lg:grid-cols-2 lg:justify-items-start justify-items-center'>
        <div className='p-8 space-y-6'>
          <div className='flex items-center gap-4'>
            <Image
              src={logoImg}
              alt='empty'
              width={300}
              height='auto'
              className='object-contain'
            />
            {/* <h1 className='text-white'>CRU Template_1</h1> */}
          </div>
          <h4 className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis
            maximus malesuada. Sed ut vestibulum libero. Duis auctor lorem eu eros
            efficitur, quis lacinia diam ornare. Donec ut consectetur justo, a
            sollicitudin ex. Sed in sollicitudin nisi. Nulla lacinia hendrerit.
          </h4>
        </div>
        <div className='relative w-full h-[400px] overflow-hidden shadow-2xl'>
          <Image
            src={heroImg}
            alt='empty'
            fill
            placeholder='blur'
            className='object-cover '
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
