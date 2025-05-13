import createHttpError from 'http-errors';

import { getStudents, getStudentById } from '../services/student.service.js';

async function getStudentsController(req, res) {
  const students = await getStudents();

  res.json({ data: students });
}

async function getStudentByIdController(req, res) {
  const studentId = req.params.id;

  const student = await getStudentById(studentId);

  if (student === null) {
    throw new createHttpError.NotFound('Student Not Found');
  }

  res.json({ data: student });
}

export { getStudentsController, getStudentByIdController };
