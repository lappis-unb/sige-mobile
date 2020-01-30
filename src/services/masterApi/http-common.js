import axios from 'axios'

const MASTER = axios.create({
  baseURL: 'http://master-api:8081/'
})

export default MASTER
