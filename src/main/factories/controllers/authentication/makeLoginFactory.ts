import { DbLogin } from '../../../../data/usecases/authentication/db-login';
import { LoginController } from '../../../../presentation/controllers/authentication/LoginController';
import { Controller } from '../../../../presentation/protocols/controller';

export function makeLoginController(): Controller {
  const login = new DbLogin();
  return new LoginController(login);
}
