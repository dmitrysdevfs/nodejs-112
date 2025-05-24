import { Student } from '../models/student.model.js';

export async function getStudents({ page, perPage }) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const [total, students] = await Promise.all([
    Student.countDocuments(),
    Student.find().skip(skip).limit(perPage),
  ]);

  const totalPages = Math.ceil(total / perPage);

  return {
    students,
    total,
    page,
    perPage,
    totalPages,
    hasNextPage: totalPages > page,
    hasPreviousPage: page > 1,
  };
}

export function getStudentById(studentId) {
  return Student.findById(studentId);
}

export function deleteStudent(studentId) {
  return Student.findByIdAndDelete(studentId);
}

export function createStudent(payload) {
  return Student.create(payload);
}

export function updateStudent(studentId, payload) {
  return Student.findByIdAndUpdate(studentId, payload, { new: true });
}

export async function replaceStudent(studentId, student) {
  const result = await Student.findByIdAndUpdate(studentId, student, {
    new: true,
    upsert: true,
    includeResultMetadata: true,
  });

  return {
    value: result.value,
    updatedExisting: result.lastErrorObject.updatedExisting,
  };
}
