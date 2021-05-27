import { Router } from 'express';

export const brandRouter = new Router();

import brandController from '../controllers/brand.js';

const {
    create,
    getAll,
    getBrand
} = brandController;

brandRouter.post('/', create);

brandRouter.get('/', getAll);

brandRouter.get('/:id', getBrand);

