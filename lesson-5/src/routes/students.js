import express from 'express';
import {
  getStudentByIdController,
  getStudentsController,
} from '../controllers/student.controller.js';

const router = express.Router();

router.get('/', getStudentsController);

router.get('/:id', getStudentByIdController);

export default router;
