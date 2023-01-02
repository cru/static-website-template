import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import Layout from 'src/components/layout'

import api from 'src/lib/api'

export const getStaticProps = async () => {
  const res = await api.get('/people')
  const people = []

  for (let i = 0; i < res.docs?.length; i++) {
    const portrait = res.docs[i].portrait

    if (portrait) {
      const { base64, img } = await getPlaiceholder(portrait?.url)

      people.push({
        ...res.docs[i],
        imageProps: {
          src: img.src,
          alt: portrait.name,
          placeholder: 'blur',
          blurDataURL: base64,
        },
      })
    } else {
      people.push({ ...res.docs[i] })
    }
  }

  return {
    props: { people: people },
    revalidate: 21600, // 6 hours
  }
}

const People = ({ people = [] }) => {
  return (
    <Layout>
      <h1>People</h1>
      <div className='grid grid-cols-4 gap-8'>
        {people.map((item) => (
          <div className='h-64' key={item.id}>
            <div className='relative h-5/6'>
              <Image
                {...item.imageProps}
                fill
                sizes='(max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              25vw'
                className='object-contain'
              />
            </div>
            <h4 className='text-lg'>{`${item.firstName} ${item.lastName}`}</h4>
            <span className='text-gray-500'>{item.description}</span>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default People
