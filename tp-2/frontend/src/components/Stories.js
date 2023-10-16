const Stories = () => {
  return (
    <div className='container section '>
      <section className='flex space-x-12 w-3/4 m-auto'>
        <section className='mt-24'>
          <span className='text-blue-500'>porttitor</span>
          <h2>What our customers are saying</h2>
        </section>
        <div className='grid lg:grid-cols-2 gap-16'>
          <section className='space-y-16 mt-16'>{storyLane1.map((e) => e)}</section>
          <section className='space-y-16'>{storyLane2.map((e) => e)}</section>
        </div>
      </section>
    </div>
  )
}

const storyLane1 = [
  <div
    key={'story-1'}
    className='rounded-xl shadow-xl bg-blue-50 w-full h-fit py-12 px-6'
  >
    <>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna
        neque viverra justo.
      </span>
      <br />
      <b className='float-right'>Lara Croft</b>
    </>
  </div>,
  <div
    key={'story-2'}
    className='rounded-xl shadow-xl bg-blue-50 w-full h-fit py-12 px-6'
  >
    <>
      <span>
        Mauris sit amet massa vitae. Etiam dignissim diam quis enim lobortis scelerisque
        fermentum. In aliquam sem fringilla ut morbi. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </span>
      <br />
      <b className='float-right'>Beth Wilder</b>
    </>
  </div>,
]

const storyLane2 = [
  <div
    key={'story-3'}
    className='rounded-xl shadow-xl bg-blue-50 w-full h-fit py-12 px-6'
  >
    <>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna
        neque viverra justo.
      </span>
      <br />
      <b className='float-right'>Jack Joyce</b>
    </>
  </div>,
  <div
    key={'story-4'}
    className='rounded-xl shadow-xl bg-blue-50 w-full h-fit py-12 px-6'
  >
    <>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna
        neque viverra justo.
      </span>
      <br />
      <b className='float-right'>Johnny Silverhand</b>
    </>
  </div>,
  <div
    key={'story-5'}
    className='rounded-xl shadow-xl bg-blue-50 w-full h-fit py-12 px-6'
  >
    <>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna
        neque viverra justo.
      </span>
      <br />
      <b className='float-right'>Alan Wake</b>
    </>
  </div>,
]

export default Stories
