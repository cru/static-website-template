import Layout from 'src/components/ui/Layout'
import api from 'src/lib/api'
import cmsUtils from 'src/lib/cms-utils'
import serverUtils from 'src/lib/server-utils'

export const getStaticPaths = async () => {
  const res = await api.get('/announcements')

  return {
    paths: res.docs
      ? res.docs
          .filter((d) => d.status === 'published')
          .map((item) => ({
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
    const page = res.docs[0]
    if (page.banner) {
      const src = `${process.env.NEXT_PUBLIC_CMS_URL}${page.banner.url}`
      const { base64, img } = await serverUtils.getImage(src)

      page.banner.imageProps = {
        src: src,
        alt: page.banner.name,
        placeholder: 'blur',
        blurDataURL: base64,
      }
    }

    return {
      props: { announcement: page },
      revalidate: parseInt(process.env.NEXT_PUBLIC_REGENERATION_TIME),
    }
  } else return { notFound: true }
}

const Announcement = ({ announcement = {} }) => {
  return (
    <Layout
      pageSlug={announcement.slug}
      pageHeader={announcement.header}
      pageBanner={announcement.banner}
    >
      <div className='mt-8'>
        {announcement.content.map((block) => {
          return (
            <>
              <h3>{block.blockName}</h3>
              {cmsUtils.renderBlock(block)}
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Announcement
