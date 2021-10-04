import Axios from "axios"
import Cookie from "js-cookie"

// 请求拦截
Axios.interceptors.request.use(
  config => {
    config.headers["X-XSRF-TOKEN"] = Cookie.get("authorize_access_token")
    if ((to.path = "/login")) {
      
    } else {
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
Axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
