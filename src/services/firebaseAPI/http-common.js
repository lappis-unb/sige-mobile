import axios from 'axios'

const FIREBASEAPI = axios.create({
  baseURL: 'https://iid.googleapis.com/iid/v1/',
  headers: { 'Authorization': `key=${process.env.KEY_SERVER}` }
})

export default FIREBASEAPI
