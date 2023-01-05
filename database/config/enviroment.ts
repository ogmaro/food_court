/* eslint-disable prettier/prettier */
import { config } from 'dotenv'; 

config();
const enviromentVariables = {
    PORT: process.env.PORT,
    DATABSAE_URL: process.env.DATABSAE_URL,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  }

export default enviromentVariables;
