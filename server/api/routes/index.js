import { Router } from 'express';

import { userRouter } from './userRouter.js';
import { itemRouter } from './itemRouter.js';
import { cartRouter } from './cartRouter.js';
import { categoryRouter } from './categoryRouter.js';
import { brandRouter } from './brandRouter.js';

export const router = new Router();

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/cart', cartRouter);
router.use('/category', categoryRouter);
router.use('/brand', brandRouter);
