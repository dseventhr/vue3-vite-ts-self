import axios from '../index.ts'

// test get
export const fetchTestGet = (data: any) => {
  return axios
    .get('/kaiwu/big_course/student/areaCodeList.json', { params: data }).then((res: any) => res)
}

// test post
export const registerUserPost = (data: any) => {
  return axios
    .post('http://localhost/api/users', data).then((res: any) => res)
}

export const fetchArticlesListGet = (data?: any) => {
  return axios
    .get('//localhost:3000/api/articles?limit=10&offset=0&tag=dragons&author=admin', { ...data  }).then((res: any) => res)
}
