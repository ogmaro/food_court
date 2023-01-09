import type { Knex } from 'knex';
import enviromentVariables from './src/config/enviroment';
const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, DATABASE_URL } =
  enviromentVariables;
console.log(DATABASE_URL);

// Update with your config settings.
import { knexSnakeCaseMappers } from 'objection';

const configuration: { [key: string]: Knex.Config } = {
  dev: {
    client: 'postgresql',
    connection: {
      database: `${POSTGRES_DB}`,
      user: `${POSTGRES_USER}`,
      password: `${POSTGRES_PASSWORD}`,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    ...knexSnakeCaseMappers,
  },
  production: {
    client: 'postgresql',
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    ...knexSnakeCaseMappers,
  },
};

export default configuration;
