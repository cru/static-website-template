const Mission = ({ scrollRef }) => {
  return (
    <div
      ref={scrollRef}
      className='w-full p-8 lg:h-content lg:h-min-[525px] lg:bg-gradient-to-r lg:from-white lg:from-45% lg:to-gray-100 lg:to-45% h-content h-min-[800px] bg-gradient-to-b from-white from-40% to-gray-100 to-40%'
    >
      <div className='grid gap-8 items-center container section h-full lg:grid-cols-2 lg:justify-items-start justify-items-center'>
        <div className='shadow-2xl w-full h-[400px] bg-brand text-white'>
          <h1 className='text-center relative top-1/2 -translate-y-1/2'>Our Mission</h1>
        </div>
        <div className='overflow-y-auto'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget nisi
            luctus, consectetur dolor quis, sagittis diam. Donec rhoncus nulla nisi, eget
            posuere odio faucibus eget. Donec convallis ornare velit, sed elementum elit
            vehicula nec. Aenean ultricies eu mi vestibulum vehicula. Nulla ullamcorper
            neque nisi. Etiam in sem dignissim, pharetra mauris at, dapibus augue. Nullam
            a bibendum enim. Nam dictum nisl ut consequat pulvinar. Donec a gravida enim.
            Pellentesque eu aliquet leo. Nunc dictum laoreet tellus, in sollicitudin lacus
            pretium gravida. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Quisque vel tristique tortor, suscipit
            bibendum mi.
          </p>
          <p>
            Vivamus vitae dolor pulvinar, finibus ex eu, fermentum diam. Cras leo ante,
            convallis tempus pulvinar non, mollis a dolor. Aliquam sed posuere nisi. Nunc
            auctor imperdiet quam ut mattis. Pellentesque et leo euismod, lobortis enim
            sit amet, ornare velit. Nulla auctor feugiat ante, nec tempus lectus venenatis
            sit amet. Donec cursus ex a risus fringilla, vel molestie mi hendrerit. Proin
            gravida odio at ante sollicitudin, ullamcorper pretium ante laoreet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
