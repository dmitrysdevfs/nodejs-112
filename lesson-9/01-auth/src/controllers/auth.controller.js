import { registerUser, loginUser } from '../services/auth.service.js';

export async function registerController(req, res) {
  const user = await registerUser(req.body);

  res
    .status(201)
    .json({ status: 201, message: 'User created successfully', data: user });
}

export async function loginController(req, res) {
  await loginUser(req.body.email, req.body.password);

  res.json({ message: 'Login' });
}
