import { RegisterParams } from '../../domain/usecases/authentication/register';
import knex from '../../main/config/database/connection';

export class UserRepository {
  static async verifyEmailExists(email: string) {
    return await knex('user as u').select({ user_id: 'u.id' }).where({ email }).first();
  }

  static async register({ email, password }: RegisterParams): Promise<number> {
    return await knex('user').insert({ email, password });
  }

  static async profile(name: string, prefix_id: number, user_id: number) {
    return await knex('user_profile').insert({ name, prefix_id, user_id });
  }
}
