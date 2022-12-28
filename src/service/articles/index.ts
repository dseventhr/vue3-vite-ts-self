import { instance as axios, fetchJsonp } from '../index'
import type { IAddArticle, ISearchArticles } from '../../types/articles'

export const fetchArticlesListGet = (data: ISearchArticles) => {
  return axios
    .get('/api/articles', { params: data }).then((res: any) => res)
}

export const addArticlePost = (data: IAddArticle) => {
  return axios
    .post('/api/articles', data).then((res: any) => res)
}
