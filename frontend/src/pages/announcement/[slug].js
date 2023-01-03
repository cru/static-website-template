import { Fragment } from 'react'
import Layout from 'src/components/layout'
import api from 'src/lib/api'
import utils from 'src/lib/cms-utils'

export const getStaticPaths = async () => {
  const res = await api.get('/announcements')

  return {
    paths: res.docs
      ? res.docs.map((item) => ({
          params: {
            slug: item.slug,
          },
        }))
      : [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }) => {
  const res = await api.get('/announcements', {
    where: {
      slug: {
        equals: params.slug,
      },
    },
    limit: 1,
  })

  if (res.docs) {
    return {
      props: { announcement: res.docs[0] },
      revalidate: parseInt(process.env.NEXT_PUBLIC_REGENERATION_TIME),
    }
  } else return { notFound: true }
}

const Announcement = ({ announcement = {} }) => {
  console.log(announcement)
  return (
    <Layout>
      <div className='mb-8'>
        <h1>{announcement.title}</h1>
        <h4>{announcement.description}</h4>
      </div>
      <Fragment>{utils.serializeRichText(announcement.content)}</Fragment>
    </Layout>
  )
}

export default Announcement
