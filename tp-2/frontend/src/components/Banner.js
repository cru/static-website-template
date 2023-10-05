import Image from 'next/image'

import logoImg from 'public/images/logoipsum.svg'

const Banner = () => {
  return (
    <div className='w-2/3 m-auto'>
      <div className='flex space-x-12 place-content-center'>
        <div className='space-y-6 max-w-[500px]'>
          <h1>
            Lorem ipsum
            <br />
            Fusce at
            <br />
            bibendum
          </h1>
          <p className='text-gray-700'>
            Donec blandit, ex at tincidunt ultricies, metus tortor tempor leo, at varius
            dolor tortor id diam. Nulla convallis neque eu eros posuere vulputate. Sed
            porttitor sem sit amet nisl varius, quis dignissim ipsum imperdiet.
          </p>
          <section className='flex space-x-4 items-center'>
            <button className='btn-primary'>Something important</button>
            <a href='https://cru.ucalgary.ca' target='_blank' rel='noopener noreferrer'>
              Contact us
            </a>
          </section>
        </div>
        <Image
          src={logoImg}
          alt='empty'
          width={600}
          height='auto'
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default Banner
