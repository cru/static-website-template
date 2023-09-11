import Slider from 'react-slick'
import Image from 'next/image'

import hero2 from 'public/images/hero2.jpg'

const Stories = ({ forwardRef }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 10000,
  }

  return (
    <div
      ref={forwardRef}
      className='w-full p-8 lg:h-content lg:h-min-[525px] lg:bg-gradient-to-r lg:from-white lg:from-45% lg:to-gray-100 lg:to-45% h-content h-min-[800px] bg-gradient-to-b from-white from-40% to-gray-100 to-40%'
    >
      <div className='grid gap-8 items-center container layout h-full lg:grid-cols-2 lg:justify-items-start justify-items-center'>
        <div className='relative w-full h-[400px] overflow-hidden shadow-2xl'>
          <Image
            src={hero2}
            alt='empty'
            fill
            placeholder='blur'
            className='object-cover '
          />
        </div>
        <div className='w-full overflow-y-auto '>
          <h1>Stories</h1>
          <hr />
          <Slider {...settings}>{stories}</Slider>
        </div>
      </div>
    </div>
  )
}

const stories = [
  <div key={'1'} className='overflow-y-auto'>
    <h4>Patient 1, 2016-2017</h4>
    <h5>University of Calgary, Canada</h5>
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis non nibh in
      ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Praesent ullamcorper porta urna quis rhoncus. Duis commodo tellus
      dictum orci ultricies elementum. Mauris pellentesque molestie velit, nec venenatis
      lacus mollis sed. Suspendisse et mauris eu erat pellentesque consectetur. Morbi in
      gravida nisi. Curabitur et facilisis diam, vel congue ex. Maecenas quis mauris
      porttitor, ullamcorper mi vel, lacinia ante. Phasellus quis imperdiet nisl, finibus
      tempor lectus. Mauris at lacinia quam, ac efficitur velit. Etiam ut condimentum ex.
      Suspendisse fermentum odio vel magna pharetra ornare.
    </p>
  </div>,
  <div key={'2'} className='overflow-y-auto'>
    <h4>Patient 2, 2015-2016</h4>
    <h5>University of Alberta, Canada</h5>
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi dolor, vehicula ac
      gravida ut, pulvinar ac orci. Nulla a sollicitudin lorem. In ac lacus auctor,
      aliquam ex non, mollis erat. Mauris finibus lorem sed tellus consectetur, lacinia
      aliquet diam.
    </p>
  </div>,
  <div key={'3'} className='overflow-y-auto'>
    <h4>Patient 3, 2019-2020</h4>
    <h5>Foothills Medical Center, Canada</h5>
    <br />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit convallis
      sollicitudin. Duis in diam vehicula, venenatis sapien vel, ullamcorper neque. Nam
      placerat feugiat odio ut condimentum. Proin dignissim nisi et elit elementum
      faucibus. Nullam malesuada ligula at venenatis eleifend. Praesent non dui eget
      tellus consectetur molestie. Ut pulvinar vehicula risus, et rutrum quam ultrices
      non. Curabitur hendrerit lectus id leo scelerisque, nec varius felis.
    </p>
  </div>,
]

export default Stories
