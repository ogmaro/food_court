import type { Knex } from 'knex';
import enviromentVariables from './database/config/enviroment';
const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, DATABSAE_URL } =
  enviromentVariables;

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
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    ...knexSnakeCaseMappers,
  },
  prod: {
    client: 'postgresql',
    connection: DATABSAE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    ...knexSnakeCaseMappers,
  },
};

export default configuration;
