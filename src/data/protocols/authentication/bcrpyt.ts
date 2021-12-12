import bcrypt from 'bcrypt';

export async function comparePassword(firstPassword: string, secondPassword: string) {
  if (!bcrypt.compareSync(firstPassword, secondPassword)) throw new Error('NOT_MATCH');
}

export async function passwordCript(password: string) {
  const salt = await bcrypt.genSalt(10);

  const hash = bcrypt.hashSync(password, salt);

  return hash;
}
