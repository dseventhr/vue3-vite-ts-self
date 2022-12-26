interface IErrorCodeStatus {
  401: string,
  403: string,
  404: string,
  405: string,
  500: string,
  501: string,
  502: string,
  504: string,
}

export const statusCode: IErrorCodeStatus = {
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  504: 'Gateway Timeout',
}
