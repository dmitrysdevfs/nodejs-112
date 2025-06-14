import express from 'express';

import { auth } from '../middleware/auth.js';

import authRoutes from './auth.js';
import studentRoutes from './students.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/students', auth, studentRoutes);

export default router;
