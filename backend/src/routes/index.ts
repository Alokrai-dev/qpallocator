import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';
import { register, login, profile, logout } from '../controllers/auth/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

import { getExams } from '../controllers/exam/exam.controller';

const router = Router();

router.get('/health', healthCheck);
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, profile);
router.post('/logout', authenticate, logout);

router.get('/exams', getExams);

export default router;
