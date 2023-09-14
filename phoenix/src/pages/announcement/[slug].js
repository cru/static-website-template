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
  console.log(announcement.content[2])
  return (
    <>
      <h1>{announcement.header}</h1>
      <div className='mt-8'>
        {announcement.content.map((block) => {
          return (
            <>
              <h3>{block.blockName}</h3>
              {utils.renderBlock(block)}
            </>
          )
        })}
      </div>
    </>
  )
}

export default Announcement
