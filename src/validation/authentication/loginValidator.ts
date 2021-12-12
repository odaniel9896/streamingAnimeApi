import * as yup from 'yup';
import { LoginParams } from '../../domain/usecases/authentication/login';

export async function validateLogin(loginParams: LoginParams) {
  const schema = yup.object().shape({
    email: yup.string().required().email().min(10),
    password: yup.string().required().min(8),
  });

  await schema.validate(loginParams, { abortEarly: false });
}
