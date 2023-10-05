import Banner from 'src/components/Banner'
import Footer from 'src/components/Footer'
import Services from 'src/components/Services'
import Stories from 'src/components/Stories'
import Announcements from 'src/components/Announcements'
import api from 'src/lib/api'

export const getStaticProps = async () => {
  const announceRes = await api.get('/announcements')
  const announcements = announceRes.docs.filter((d) => d.status === 'published')

  return {
    props: {
      announcements: announcements,
    },
    revalidate: parseInt(process.env.NEXT_PUBLIC_REGENERATION_TIME),
  }
}

const Home = ({ announcements }) => {
  return (
    <>
      <Announcements announcements={announcements} />
      <div className='pt-48 space-y-64'>
        <Banner />
        <Services />
        <Stories />
      </div>
      <Footer />
    </>
  )
}

export default Home
