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

  await db
    .insert(users)
    .values({
      username: data.username,
      password: hashedPassword,
      mobileNumber: data.mobileNumber,
      type: data.type ?? 'selector',
    });

  const user = await db.query.users.findFirst({
    where: eq(users.username, data.username),
  });

  return user;
}

import { exams } from '../../db/schema/exam';

// 🔑 Login
export async function loginUser(username: string, password: string, examName?: string) {
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

  let examId: number | undefined;

  if (user.type === 'selector') {
    if (!examName) {
      throw new Error('An examination must be selected to continue');
    }
    
    // Validate and get examId
    const exam = await db.query.exams.findFirst({
      where: eq(exams.examName, examName),
    });

    if (!exam) {
      throw new Error('The selected examination was not found or is no longer active');
    }
    examId = exam.id;
  }

  // create JWT
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      type: user.type, // admin / selector
      examId: examId,
      examName: user.type === 'selector' ? examName : undefined,
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
      examId: examId,
      examName: user.type === 'selector' ? examName : undefined,
    },
  };
}

// 👤 Get User Profile
export async function getUserById(id: number) {
  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Remove sensitive data (like password) before returning
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
}
