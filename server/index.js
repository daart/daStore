import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { sequelize } from './db.js';
import { router } from './api/routes/index.js';
import {
    User,
    Cart,
    CartItem,
    Item,
    ItemInfo,
    Rating,
    Category,
    Brand,
    CategoryBrand,
} from './models/models.js';
import { errorHandler } from './api/middleware/ErrorHandlingMiddleware.js';

dotenv.config();

const PORT = process.env.PORT || 7373;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.get('/', (req, res) => {
            res.send('Hello world!');
        });

        app.listen(PORT, () => {
            console.log(`app is served on http://localhost:${PORT}`);
        });

        console.log('DB connection has been established successfully.');
    } catch (err) {
        console.log('Unable to connect to db', err);
    }
};

start();
