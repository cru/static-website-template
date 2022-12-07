import qs from 'qs'

const api = {}
const url = `${process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:3000/api'}`

api.get = async (path = '', params = {}, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  }
  const query = qs.stringify(params)
  const requestURL = `${url}${path}?${query}`

  try {
    const response = await fetch(requestURL, config)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)

    return error
  }
}

export default api
