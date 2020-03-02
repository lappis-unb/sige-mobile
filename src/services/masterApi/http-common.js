import axios from 'axios'

const MASTER = axios.create({
  baseURL: 'http://192.168.15.19:8001/'
})

export default MASTER
