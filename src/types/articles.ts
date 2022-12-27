export interface ISearchArticles{
    limit: number;
    offset: number;
    tag?: string;
    author: string;
}

interface Article {
    title: string;
    description: string;
    body: string;
    tagList?: Array<string> | any;
}

export interface IAddArticle {
    article: Article
}
