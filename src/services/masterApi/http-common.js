import axios from 'axios'

if (typeof window === 'undefined') {
  global.window = {
    location: {
      replace: () => { },
      protocol: 'https'
    },
    navigator: {
      userAgent: '',
      appVersion: ''
    },
    scrollTo: () => { },
    open: () => { },
    localStorage: {}
  }
}

// const executeShellCmd = require('child_process').execSync;
// const master_ip = executeShellCmd("docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' master-api", { encoding: 'utf-8' });

const MASTER = axios.create({
  baseURL: 'http://172.24.0.6:8001/'
})

export default MASTER
