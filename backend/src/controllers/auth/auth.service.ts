import { db } from '../../db/db';
import { users } from '../../db/schema/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { eq } from 'drizzle-orm';

const JWT_SECRET = process.env.JWT_SECRET!;

// 🔐 Register
export async function registerUser(data: {
  username: string;
  password: string;
  mobileNumber: string;
  type?: 'admin' | 'selector';
}) {
  // hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await db
    .insert(users)
    .values({
      username: data.username,
      password: hashedPassword,
      mobileNumber: data.mobileNumber,
      type: data.type ?? 'selector',
    })
    .returning();

  return user[0];
}

// 🔑 Login
export async function loginUser(username: string, password: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error('Invalid password');
  }

  // create JWT
  const token = jwt.sign(
    {
      id: user.id,
      type: user.type, // admin / selector
    },
    JWT_SECRET,
    { expiresIn: '1d' },
  );

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      type: user.type,
    },
  };
}
