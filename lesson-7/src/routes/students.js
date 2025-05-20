import express from 'express';
import {
  createStudentController,
  deleteStudentController,
  getStudentByIdController,
  getStudentsController,
  updateStudentController,
  replaceStudentController,
} from '../controllers/student.controller.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidID } from '../middleware/isValidID.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', isValidID, ctrlWrapper(getStudentByIdController));

router.delete('/:id', isValidID, ctrlWrapper(deleteStudentController));

router.post('/', jsonParser, ctrlWrapper(createStudentController));

router.patch(
  '/:id',
  isValidID,
  jsonParser,
  ctrlWrapper(updateStudentController),
);

router.put(
  '/:id',
  isValidID,
  jsonParser,
  ctrlWrapper(replaceStudentController),
);

export default router;
