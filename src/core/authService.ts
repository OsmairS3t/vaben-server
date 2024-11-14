import bcrypt from 'bcrypt';

const saltRounds = 10;

// Função para gerar o hash da senha
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Função para verificar a senha informada com o hash salvo
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const match = await bcrypt.compare(password, hash);
  return match;
}

// Função para efetuar o login
export async function loginUser(password: string, storedHash: string) {
  const isPasswordValid = await verifyPassword(password, storedHash);
  if (isPasswordValid) {
    return true
  } else {
    return false
  }
}
