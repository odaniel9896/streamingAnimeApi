import * as yup from 'yup';

export async function validateLogin(loginParams: any) {
  const schema = yup.object().shape({
    email: yup.string().required().email().min(10),
    password: yup.string().required().min(8),
  });

  await schema.validate(loginParams, { abortEarly: false });
}
