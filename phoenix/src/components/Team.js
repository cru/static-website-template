import Image from 'next/image'

const Team = ({ forwardRef = null, team = [] }) => {
  return (
    <div ref={forwardRef} className='container layout text-center'>
      <h1>Team</h1>
      <div className='grid grid-cols-4 gap-8'>
        {team.map((item) => (
          <div className='h-64' key={item.id}>
            <div className='relative h-5/6'>
              <Image
                {...item.imageProps}
                fill
                sizes='(max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              25vw'
                className='object-contain'
              />
            </div>
            <h4 className='text-lg'>{`${item.firstName} ${item.lastName}`}</h4>
            <span className='text-gray-500'>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
