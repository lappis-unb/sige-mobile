import axios from 'axios'

const MASTER = axios.create({
  baseURL: 'http://master-api:8001/'
})

export default MASTER
