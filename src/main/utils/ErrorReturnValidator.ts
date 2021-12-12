import { ValidationError } from 'yup';
import { badRequest } from './ApiResponse';
import { formatYupError } from './formatters/yupFormatterError';

export async function errorReturnValidator(error: any) {
  if (error instanceof ValidationError) {
    return badRequest(formatYupError(error));
  }
}
