import Layout from 'src/components/layout'
import api from 'src/lib/api'

export async function getStaticProps() {
  const res = await api.get('/announcements')

  return {
    props: {
      announcements: res.docs,
    },
    revalidate: 1,
  }
}

const Home = () => {
  return (
    <Layout>
      <div className='flex w-11/12 flex-1 flex-col container justify-center'>
        <h1 className='text-6xl'>Static Website Template</h1>
        <p className='mt-3 text-2xl'>
          This template provides a starting point for a static content website.
        </p>
        <br />
        <b>Comes with:</b>
        <ul className='list-disc pl-6'>
          <li>Customizable Homepage</li>
          <li>Customizable People/Team page powered by Payload</li>
          <li>Ready-to-go Navbar</li>
          <li>Ready-to-go Footer</li>
          <li>Ready-to-go Announcements powered by Payload</li>
          <li>Ready-to-go Contact form</li>
          <li>Preconfigured TailwindCSS for styling</li>
          <li>Preconfigured Payload CMS for providing evolving content</li>
          <li>No branding or design</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
