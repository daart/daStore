import { Router } from 'express';

import userController from '../controllers/user.js';

const { login, auth, register } = userController;

export const userRouter = new Router();

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/auth', auth);
