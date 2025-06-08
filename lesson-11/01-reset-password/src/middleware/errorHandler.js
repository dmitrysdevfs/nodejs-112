import { isHttpError } from 'http-errors';

export function errorHandler(err, req, res, next) {
  if (isHttpError(err) === true) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }

  console.error('Error handler :>> ', err);

  res.status(500).json({ status: 500, message: 'Internal Server Error' });
}
