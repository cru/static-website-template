import api from 'src/lib/api'

export async function getStaticPaths() {
  const res = await api.get('/announcements')

  return {
    paths: res.docs.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const res = await api.get('/announcements', {
    where: {
      slug: {
        equals: params.slug,
      },
    },
    limit: 1,
  })

  return {
    props: { announcement: res.docs[0] },
    revalidate: 21600, // 6 hours
  }
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
