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
      revalidate: 21600, // 6 hours
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
              <div className='grid grid-cols-6 gap-4'>
                {block.columns.map((col) => {
                  return (
                    <div
                      className={`${utils.getColSpan(col.width)} ${utils.getAlignment(
                        col.alignment
                      )}`}
                    >
                      {utils.serializeRichText(col.richText)}
                    </div>
                  )
                })}
              </div>
            </>
          )
        })}
      </div>
    </Layout>
  )
}

export default Post
