import { instance as axios, fetchJsonp } from '../index.ts'

export const loginPost = (data?: any) => {
    return axios
        .post('//localhost:3000/api/users/login', data).then((res: any) => res)
}