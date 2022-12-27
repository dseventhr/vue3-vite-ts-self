type Keys = 401 | 403 | 404 | 405 | 500 | 501 | 502 | 504;

type statusCode = {
  [key in Keys]: string
}

export default statusCode