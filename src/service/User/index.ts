import { instance as axios } from '../index'

export const loginPost = (data?: any) => {
    return axios
        .post('/api/users/login', data).then((res: any) => res)
}