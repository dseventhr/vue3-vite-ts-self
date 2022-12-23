import axios from 'eduAxiosComponent'
import jsonp from 'jsonp'
import * as Cookies from 'js-cookie'
import Vue from 'vue'
const vue = new Vue()

const instance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    withCredentials: true, // 携带cookie
})

// 请求拦截
instance.interceptors.request.use(
    (request: any) => {
        return request
    },
    (error: any) => { }
)

// 响应拦截
instance.interceptors.response.use(
    (response: any) => {
        return response.data
    },
    (error: any) => {
        if (error.response.status) {
            vue.$message.error(`${error.response.status}`)
        }
    }
)

function fetchJsonp(url: any, params: any) {
    let requestUrl = url
    if (params) {
        params._ = Date.parse(new Date())
        const dataString = url.indexOf('?') === -1 ? '?' : '&'
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
