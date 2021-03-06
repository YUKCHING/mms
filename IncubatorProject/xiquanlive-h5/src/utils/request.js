import axios from 'axios'
import Config from '@/config'
import { Indicator, Toast } from 'mint-ui'

const request = axios.create({
  baseURL: Config.url,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(config => {
  Indicator.open('加载中...')
  if (config.method === 'get') {
  } else {
    if (config.data) {
      config.data = JSON.stringify(config.data)
    }
  }
  return config
}, err => {
  return Promise.reject(err)
})

request.interceptors.response.use(res => {
  Indicator.close()

  const data = res.data
  if (data.code !== 200) {
    return Promise.reject(data.msg)
  }

  return data
}, error => {
  Indicator.close()
  Toast(error.response.data.error)

  return Promise.reject(error.message)
})

export default request
