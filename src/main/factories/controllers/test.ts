import { LoginController } from '../../../presentation/controllers/users/test-controller';
import { Controller } from '../../../presentation/protocols/controller';

export function makeLoginController(): Controller {
	return new LoginController();
}
