import axios from '../index.ts'

// test get
export const fetchTestGet = (data: any) => {
  return axios
    .get('/kaiwu/big_course/student/areaCodeList.json', { params: data }).then((res: any) => res)
}

// test post
export const fetchTestPost = (data: any) => {
  return axios
    .post('/kaiwu/user_growth/present/changePresentStatus.json', data).then((res: any) => res)
}
