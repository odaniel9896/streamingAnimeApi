import { ValidationError } from 'yup';
import { Register, RegisterParams } from '../../../domain/usecases/authentication/register';
import { badRequest, conflict, ok, serverError } from '../../../main/utils/ApiResponse';
import { formatYupError } from '../../../main/utils/formatters/yupFormatterError';
import { validateRegister } from '../../../validation/authentication/registerValidator';
import { Controller, HttpRequest } from '../../protocols';

export class RegisterController implements Controller {
  constructor(private readonly register: Register) {}
  async handle(httpRequest: HttpRequest) {
    const data: RegisterParams = httpRequest.body;
    try {
      await validateRegister(data);

      const register = await this.register.add(data);

      return ok(register);
    } catch (error) {
      if (error instanceof ValidationError) {
        return badRequest(formatYupError(error));
      }
      if (error.message === 'EMAIL_ALREADY_EXISTS') {
        return conflict('email');
      }
      return serverError(error);
    }
  }
}
