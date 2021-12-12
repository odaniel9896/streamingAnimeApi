import bcrypt from 'bcrypt';

export async function comparePassword(firstPassword: string, secondPassword: string) {
  return bcrypt.compareSync(firstPassword, secondPassword);
}

export async function passwordCript(password: string) {
  const salt = await bcrypt.genSalt(10);

  const hash = bcrypt.hashSync(password, salt);

  return hash;
}
