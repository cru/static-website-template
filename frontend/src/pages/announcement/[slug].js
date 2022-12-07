import api from 'src/lib/api'

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
      revalidate: 21600, // 6 hours
    }
  } else return { notFound: true }
}

const Announcement = ({ announcement = {} }) => {
  return (
    <>
      <div>
        <h1>{announcement.title}</h1>
      </div>
    </>
  )
}

export default Announcement
