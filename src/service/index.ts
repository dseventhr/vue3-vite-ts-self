import { instance as axios, fetchJsonp } from './axios'
import { ElNotification } from 'element-plus'
import { statusCode } from './statusCode'

// const { VUE_APP_BASE_URL: BASE_URL, NODE_ENV } = process.env

// if (location.origin.match(/\.lagou.com/) && NODE_ENV !== 'production') {
//   axios.defaults.baseURL = '/api'
// } else {
//   axios.defaults.baseURL = BASE_URL + '/eduhome'
// }

interface IErrorResponse {
  status: number
}
interface IError {
  response: IErrorResponse
}

// 请求拦截
axios.interceptors.request.use(
  (request: any) => {
    return request
  },
  (error: any) => {}
)

// 响应拦截
axios.interceptors.response.use(
  (response: any) => {
    if (!response) return response
    return response
  },
  (error: IError) => {
    ElNotification({
      title: '请求失败',
      message: `${error.response.status} ${statusCode[error.response.status]}`,
      type: 'error'
    })
  }
)

// test接口
export const testGet = () => {
  return axios.get('getUserInfo', { params: { uid: 1 } })
}

export const testPost = () => {
  return axios.post('saveUserInfo', { data: { name: 'username' } })
}

export const testFetchJsonp = (params: any) => {
  return fetchJsonp(
    `https://passport.lagou.com/login/sendVerifyCode.json`,
    params
  )
}

export default axios
