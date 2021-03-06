import axios from 'axios'

const baseApi = axios.create({
  baseURL: 'https://challenge-dot-popsure-204813.appspot.com/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});


// const sampleBody = {
//   "firstName": "Jane",
//   "address": "Lohmühlenstraße 65",
//   "numberOfChildren": 2,
//   "occupation": "EMPLOYED",
//   "email": "jane.doe@getpopsure.com"
// }

export const postFormData = async (body) => {
  (body.hasOwnProperty('children')) && delete body.children
  // console.dir(body)
  const result = await baseApi.post('/user', body)
  return result.data
}

export const getRecommendations = async (jwt) => {
  const result = await baseApi.get('/recommendation', {
    headers: {
      'Authorization': `Bearer ${jwt}`
    }
  })
  console.dir(result.data)
  return result.data
}