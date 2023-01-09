/* eslint-disable prettier/prettier */
import { config } from 'dotenv'; 

config();
const enviromentVariables = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV
  }

export default enviromentVariables;
