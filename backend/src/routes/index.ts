import { Router } from 'express';
import { healthCheck } from '../controllers/health.controller';
import { register, login, profile, logout } from '../controllers/auth/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

import { getExams } from '../controllers/exam/exam.controller';

import { getExamData, randomize, getHistory } from '../controllers/allocation/allocation.controller';

const router = Router();

router.get('/health', healthCheck);
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticate, profile);
router.post('/logout', authenticate, logout);

router.get('/exams', getExams);

// Allocation Routes
router.get('/allocations/data', authenticate, getExamData);
router.post('/allocations/randomize', authenticate, randomize);
router.get('/allocations/history', authenticate, getHistory);

export default router;
