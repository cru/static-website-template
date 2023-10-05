import Image from 'next/image'

const Team = ({ forwardRef = null, team = [] }) => {
  return (
    <div ref={forwardRef} className='container section text-center space-y-12 px-32'>
      <h1>Meet the Team</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-16 justify-items-center '>
        {team.map((item) => (
          <div key={item.id} className='flex gap-4 content-center w-80'>
            <div className='w-24 h-24'>
              <div className='relative h-full'>
                <Image {...item.imageProps} fill className='object-cover rounded-md' />
              </div>
            </div>
            <div className='text-left'>
              <h4 className='text-sm'>{`${item.firstName} ${item.lastName}`}</h4>
              <span className='text-xs text-gray-500'>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
