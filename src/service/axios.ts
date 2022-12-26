// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import axios from 'axios'
import { ElNotification } from 'element-plus'
import jsonp from 'jsonp'
// import * as Cookies from 'js-cookie'

const instance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    withCredentials: false,
})

//请求错误异常处理
const ErrorHandle = (error: any): Promise<any> => {
    if (error.response) {
        let { status } = error.response
        let message = ''
        switch (status) {
            case 400:
                message = '请求错误(400)'
                break
            case 401:
                message = '未授权，将重新登录(401)'
                break
            case 403:
                message = '拒绝访问(403)'
                break
            case 404:
                message = '请求出错(404)'
                break
            case 408:
                message = '请求超时(408)'
                break
            case 500:
                message = '服务器错误(500)'
                break
            case 501:
                message = '服务未实现(501)'
                break
            case 502:
                message = '网络错误(502)'
                break
            case 503:
                message = '服务不可用(503)'
                break
            case 504:
                message = '网络超时(504)'
                break
            case 505:
                message = 'HTTP版本不受支持(505)'
                break
            default:
                message = `连接出错(${status})!`
        }
        message = `${message}，请检查网络或联系管理员！`
        ElNotification({
            title: '请求失败',
            message: message,
            type: 'error'
        })
    }
    return Promise.reject(error)

}
// 请求拦截
instance.interceptors.request.use(
    (request: any) => {
        return request
    },
    ErrorHandle
)

// 响应拦截
instance.interceptors.response.use(
    (response: any) => {
        return response.data
    },
    ErrorHandle
)

function fetchJsonp(url: string, params: any) {
    let requestUrl: string = url
    if (params) {
        const timeStamp: string = new Date().toString()
        params._ = Date.parse(timeStamp)
        const dataString: string = url.indexOf('?') === -1 ? '?' : '&'
        requestUrl = `${requestUrl}${dataString}`
        for (const k in params) {
            requestUrl += `&${k}=${params[k]}`
        }
    }
    return new Promise((resolve, reject) => {
        jsonp(requestUrl, { param: 'jsoncallback' }, (err: any, res: any) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export { instance, fetchJsonp }
