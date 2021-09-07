import { Controller, HttpRequest } from '../../protocols';
import { ok } from '../../../main/utils/ApiResponse';

export class LoginController implements Controller {
	async handle(httpRequest: HttpRequest) {
		try {
			return ok({ oi: 'oi' });
		} catch (error) {
			console.log(error);
		}
	}
}
