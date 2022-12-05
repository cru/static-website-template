import { fetchAPI } from 'src/lib/api'

const Home = ({ articles = [], announcements = [], homepage = {} }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center md:py-2 py-12'>
      <div className='flex w-11/12 flex-1 flex-col container justify-center'>
        <h1 className='text-6xl'>Static Website Template</h1>
        <p className='mt-3 text-2xl'>
          This template provides a starting point for a static content website.
        </p>
        <br />
        <b>Comes with:</b>
        <ul className='list-disc pl-6'>
          <li>Customizable Homepage</li>
          <li>Customizable People/Team page powered by Strapi</li>
          <li>Ready-to-go Navbar powered by Strapi</li>
          <li>Ready-to-go Footer powered by Strapi</li>
          <li>Ready-to-go Announcements powered by Strapi</li>
          <li>Ready-to-go Contact form</li>
          <li>Preconfigured TailwindCSS for styling</li>
          <li>Preconfigured Strapi backend for providing evolving content</li>
          <li>No branding or design</li>
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const responses = await Promise.all([
    fetchAPI('/articles', { populate: '*' }),
    fetchAPI('/announcements', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      articles: responses[0].data,
      announcements: responses[1].data,
      homepage: responses[2].data,
    },
    revalidate: 1,
  }
}

export default Home
