import express from 'express';
import {
  getStudentByIdController,
  getStudentsController,
} from '../controllers/student.controller.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', ctrlWrapper(getStudentByIdController));

export default router;
