import { useRouter } from 'next/router'

import Footer from '../Footer'
import Image from 'next/image'

const Layout = ({ pageSlug = '', pageHeader = '', pageBanner = {}, children }) => {
  const router = useRouter()

  return (
    <>
      <div className='w-full h-64'>
        <div className='relative h-full'>
          <Image {...pageBanner.imageProps} fill className='object-cover' />
          <div className='absolute -bottom-[35%] left-4 shadow-2xl bg-brand text-white p-8 mx-12'>
            <span className='text-xs'>
              <span
                className='cursor-pointer hover:text-sky-500'
                onClick={() => router.push('/')}
              >
                home
              </span>{' '}
              / {pageSlug}
            </span>
            <h1>{pageHeader}</h1>
          </div>
        </div>
      </div>
      <div className='container mx-12 mt-32 min-h-[90vh]'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
