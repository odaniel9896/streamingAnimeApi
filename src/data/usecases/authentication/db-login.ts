import { Login, LoginParams } from '../../../domain/usecases/authentication/login';
import { UserRepository } from '../../../infra/database/UserRepository';
import { comparePassword } from '../../protocols/authentication/bcrpyt';

export class DbLogin implements Login {
  async auth({ email, password }: LoginParams): Promise<string> {
    const user = await UserRepository.verifyEmailExists(email);

    const compare = await comparePassword(password, user.password);

    if (!user || !compare) {
      throw new Error('NOT_FOUND');
    }

    return 'a';
  }
}
