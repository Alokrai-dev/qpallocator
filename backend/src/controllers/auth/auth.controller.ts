import { Request, Response } from 'express';
import { registerUser, loginUser, getUserById } from './auth.service';
import { AuthRequest } from '../../middlewares/auth.middleware';

// Register API
export async function register(req: Request, res: Response) {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: 'User created',
      user,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(400).json({ error: message });
  }
}

// Login API
export async function login(req: Request, res: Response) {
  try {
    const { username, password, examName } = req.body;

    const result = await loginUser(username, password, examName);

    res.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(401).json({ error: message });
  }
}

// Profile API
export async function profile(req: AuthRequest, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Fetch fresh user data from DB
    const user = await getUserById(req.user.id);

    res.json({
      user: {
        ...user,
        examId: req.user.examId,
        examName: req.user.examName, // Include examName from token session
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}

// Logout API
export async function logout(req: AuthRequest, res: Response) {
  try {
    // For JWT based auth, logout is primarily handled on the client side 
    // by removing the token from storage.
    res.json({
      message: 'Logged out successfully',
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
}
