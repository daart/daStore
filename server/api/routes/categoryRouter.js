import { Router } from 'express';

export const categoryRouter = new Router();

import categoryController from '../controllers/category.js';

const { create, getAll, getCategory } = categoryController;

categoryRouter.post('/', create);

categoryRouter.get('/', getAll);

categoryRouter.get('/:id', getCategory);
