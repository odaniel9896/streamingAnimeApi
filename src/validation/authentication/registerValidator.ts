import * as yup from 'yup';
import { RegisterParams } from '../../domain/usecases/authentication/register';

export async function validateRegister(registerParams: RegisterParams) {
  const schema = yup.object().shape({
    email: yup.string().required().email().max(60),
    password: yup.string().required().min(8),
    prefix_id: yup.number().required(),
    name: yup.string().min(8).max(25),
  });

  await schema.validate(registerParams, { abortEarly: false });
}
