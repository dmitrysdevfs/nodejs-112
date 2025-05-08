import express from 'express';

const app = express();

const STUDENTS = [
  { id: 1, name: 'Student 1' },
  { id: 2, name: 'Student 2' },
];

app.get('/api/students', (req, res) => {
  res.json({
    data: STUDENTS,
  });
});

app.get('/api/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);

  const student = STUDENTS.find((student) => student.id === studentId);

  if (typeof student === 'undefined') {
    return res.status(404).send({ messaage: 'Student not found' });
  }

  res.json({ data: student });
});

export default app;
