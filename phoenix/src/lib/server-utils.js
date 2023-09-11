import { getPlaiceholder } from 'plaiceholder'

const utils = {}

utils.getImage = async (src = '') => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer)

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

export default utils
