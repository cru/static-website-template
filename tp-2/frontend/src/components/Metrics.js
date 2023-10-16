const Metrics = () => {
  return (
    <div className='container section text-center bg-blue-950 p-24 text-gray-200 space-y-12 rounded-xl'>
      <section>
        <span className='text-blue-200'>maecenas volutpat blandit</span>
        <h2>Magna Eget est Lorem Ipsum</h2>
      </section>

      <div className='flex space-x-12 justify-center'>
        <section className='space-x-2'>
          <b className='text-4xl'>6,000,000</b>
          <small>Data Points</small>
        </section>
        <section className='space-x-2'>
          <b className='text-4xl'>25,000</b>
          <small>Patients</small>
        </section>
        <section className='space-x-2'>
          <b className='text-4xl'>1,500</b>
          <small>Sites</small>
        </section>
        <section className='space-x-2'>
          <b className='text-4xl'>1,000</b>
          <small>Projects</small>
        </section>
      </div>
    </div>
  )
}

export default Metrics
