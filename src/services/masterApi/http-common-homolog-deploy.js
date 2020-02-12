import axios from 'axios'

const MASTER = axios.create({
  baseURL: 'http://10.0.0.221/'
})

export default MASTER

