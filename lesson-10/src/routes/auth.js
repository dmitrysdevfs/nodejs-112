import express from 'express';

import { validateBody } from '../middleware/validateBody.js';

import { registerSchema, loginSchema } from '../validation/auth.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  loginController,
  registerController,
} from '../controllers/auth.controller.js';

const router = express.Router();
const jsonParser = express.json();

router.post(
  '/register',
  jsonParser,
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

router.post(
  '/login',
  jsonParser,
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

export default router;
