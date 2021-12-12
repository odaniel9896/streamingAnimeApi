import { Controller, HttpRequest } from '../../protocols';
import { badRequest, ok, serverError } from '../../../main/utils/ApiResponse';
import { validateLogin } from '../../../validation/authentication/loginValidator';
import { ValidationError } from 'yup';
import { formatYupError } from '../../../main/utils/formatters/yupFormatterError';
import { Login } from '../../../domain/usecases/authentication/login';
export class LoginController implements Controller {
  constructor(private readonly login: Login) {}
  async handle(httpRequest: HttpRequest) {
    const { email, password } = httpRequest.body;
    try {
      await validateLogin({ email, password });

      const login = await this.login.auth({ email, password });
      return ok({ login });
    } catch (error) {
      if (error instanceof ValidationError) {
        return badRequest(formatYupError(error));
      }
      return serverError(error);
    }
  }
}
