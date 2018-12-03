import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_REQUEST_URL
axios.defaults.timeout = 30 * 1000

const instance = axios.create({
  headers: {
    token: localStorage.getItem('token') // 设置header 默认值，根据自己情况而定
  }
})

/**
 * 返回拦截器
 */
instance.interceptors.response.use(
  res => {
    return Promise.resolve(res.data)
  },
  err => {
    if (err.config.handle) {
      return Promise.reject(err.response.data)
    }

    if (err.response.data.error_code === 10003) {
      // open('user.login', { popGesture: 'none' })
      return Promise.reject(err.response.data)
    }
    /**
     * 错误弹窗，和返回异常是异步进行的
     * 注释的是用的 vant 的组件
     */
    // return Dialog.alert({
    //   message: err.response.data.msg
    // }).then(() => {
    //   return Promise.reject(err.response.data)
    // })
    return Promise.reject(err.response.data)
  }
)

const http = {
  request (options) {
    return instance(options)
  },
  get (url, params) {
    return instance.get(url, { params })
  },
  post (url, data) {
    return instance.post(url, data)
  },
  put (url, data) {
    return instance.put(url, data)
  },
  delete (url, data) {
    return instance.delete(url, data)
  }
}

export default http
