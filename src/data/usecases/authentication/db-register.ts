import { Register, RegisterParams } from '../../../domain/usecases/authentication/register';
import { UserRepository } from '../../../infra/database/UserRepository';

export class DbRegister implements Register {
  async add({ email, password, name, prefix_id }: RegisterParams): Promise<number> {
    const verifyUserExists = await UserRepository.verifyEmailExists(email);

    if (verifyUserExists) {
      throw new Error('EMAIL_ALREADY_EXISTS');
    }

    const user = await UserRepository.register({ email, password });

    await UserRepository.profile(name, prefix_id, user);

    return user;
  }
}
