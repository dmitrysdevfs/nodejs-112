import createHttpError from 'http-errors';

export function validateBody(schema) {
  return async (req, res, next) => {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return next(createHttpError.BadRequest('Request body is missing'));
      }

      await schema.validateAsync(req.body, { abortEarly: false });

      next();
    } catch (error) {
      const errors = error.details.map((detail) => detail.message);

      next(createHttpError.BadRequest(errors));
    }
  };
}
