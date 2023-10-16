const Donate = ({ forwardRef = null }) => {
  return (
    <div
      ref={forwardRef}
      className='section w-full p-8 lg:h-content lg:h-min-[525px] lg:bg-gradient-to-r lg:from-gray-100 lg:from-55% lg:to-white lg:to-45% h-content h-min-[800px] bg-gradient-to-b from-gray-100 from-60% to-white to-40%'
    >
      <div className='grid gap-8 items-center container section h-full lg:grid-cols-2 lg:justify-items-start justify-items-center'>
        <div className='grid grid-cols-3 gap-8'>
          <div>
            <h4>$20</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4>$50</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4>$100</h4>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='col-span-3 text-center'>
            <button className='btn'>
              Donate Now
            </button>
          </div>
        </div>
        <div className='shadow-2xl w-full h-[400px] bg-brand text-white'>
          <h1 className='text-center relative top-1/2 -translate-y-1/2'>
            How Your Money Helps
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Donate
