import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { fetchAPI } from '../../lib/api'
import Seo from '../../components/seo'
import rehypeRaw from 'rehype-raw'

const Announcement = ({ announcement }) => {
  const seo = {
    metaTitle: announcement.attributes.short_heading,
    metaDescription: announcement.attributes.short_heading,
  }

  return (
    <>
      <Seo seo={seo} />
      <div>
        <h1>{announcement.attributes.heading}</h1>
        <ReactMarkdown
          children={announcement.attributes.content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetchAPI('/announcements', { fields: ['slug'] })

  return {
    paths: res.data.map((item) => ({
      params: {
        slug: item.attributes.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI('/announcements', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  })

  return {
    props: { announcement: res.data[0] },
    revalidate: 1,
  }
}

export default Announcement
