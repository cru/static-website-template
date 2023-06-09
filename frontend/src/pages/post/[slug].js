import Image from 'next/image'
import Layout from 'src/components/layout'
import api from 'src/lib/api'
import utils from 'src/lib/cms-utils'

export const getStaticPaths = async () => {
  const res = await api.get('/posts')

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
  const res = await api.get('/posts', {
    where: {
      slug: {
        equals: params.slug,
      },
    },
    limit: 1,
  })

  if (res.docs) {
    return {
      props: { post: res.docs[0] },
      revalidate: parseInt(process.env.NEXT_PUBLIC_REGENERATION_TIME),
    }
  } else return { notFound: true }
}

const Post = ({ post = {} }) => {
  console.log(post)
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div className='mt-8'>
        {post.layout.map((block) => {
          return (
            <>
              <h3>{block.blockName}</h3>
              {block.blockType === 'content' && (
                <div className='grid grid-cols-6 gap-4'>
                  {block.columns.map((col, i) => {
                    return (
                      <div
                        key={i}
                        className={`${utils.getColSpan(col.width)} ${utils.getAlignment(
                          col.alignment
                        )}`}
                      >
                        {utils.serializeRichText(col.richText)}
                      </div>
                    )
                  })}
                </div>
              )}
              {block.blockType === 'media' && (
                <div className='relative h-96'>
                  <Image
                    src={block.media.url}
                    fill
                    sizes='(max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              25vw'
                    className='object-contain'
                  />
                </div>
              )}
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Post
