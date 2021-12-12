import { Login, LoginParams } from '../../../domain/usecases/authentication/login';

export class DbLogin implements Login {
  async auth({ email, password }: LoginParams): Promise<string> {
    return 'a';
  }
}
