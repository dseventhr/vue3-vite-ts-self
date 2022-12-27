import type statusCode from "@/types/statusCode"

export const statusCode: statusCode = {
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  504: 'Gateway Timeout',
}
