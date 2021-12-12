import { DbRegister } from '../../../../data/usecases/authentication/db-register';
import { RegisterController } from '../../../../presentation/controllers/authentication/RegisterController';
import { Controller } from '../../../../presentation/protocols/controller';

export function makeRegisterFactory(): Controller {
  const register = new DbRegister();
  return new RegisterController(register);
}
