interface Error {
  msg: string
}

interface ApiError extends Error {
  code: number
}

interface HttpError extends Error {
  statusError: number
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true;
  }
  return false;
}

let error: ApiError = {
  msg: 'api error',
  code: 404,
}