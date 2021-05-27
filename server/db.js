import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const {
    DB_PASSWORD,
    DB_USERNAME,
    DB_NAME,
    DB_PORT,
    DB_DIALECT,
    DB_HOST
} = process.env;

const dbConfigOptions = {
    database: DB_NAME,
    port: DB_PORT,
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dialect: DB_DIALECT
};

export const sequelize = new Sequelize(dbConfigOptions);