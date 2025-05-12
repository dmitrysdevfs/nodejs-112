import { getStudents, getStudentById } from '../services/student.service.js';

async function getStudentsController(req, res) {
  const students = await getStudents();

  res.json({ data: students });
}

async function getStudentByIdController(req, res) {
  const studentId = req.params.id;

  const student = await getStudentById(studentId);

  console.log('Received ID:', studentId);

  if (student === null) {
    return res.status(404).send({ message: 'Student not found' });
  }

  res.json({ data: student });
}

export { getStudentsController, getStudentByIdController };
