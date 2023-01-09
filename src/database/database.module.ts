import { Global, Module } from '@nestjs/common';
import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { AddonModel } from './models/addon.model';
import { CategoryModel } from './models/addon_categories.model';
import { UserModel } from './models/user.model';
import { BrandModel } from './models/brand.model';
import enviromentVariables from '../config/enviroment';
import { RoleModel } from 'src/database/models/role.model';
const {
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_DB,
  DATABASE_URL,
  NODE_ENV,
} = enviromentVariables;

const models = [AddonModel, CategoryModel, BrandModel, UserModel, RoleModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});
const chooseDatabase = (enviroment) => {
  if (enviroment === 'production') {
    console.log(`Database connected in ${enviroment} mode`);
    return [
      ...modelProviders,
      {
        provide: 'KnexConnection',
        useFactory: async () => {
          const knex = Knex({
            client: 'postgresql',
            connection: DATABASE_URL,
            debug: process.env.KNEX_DEBUG === 'true',
            ...knexSnakeCaseMappers(),
          });

          Model.knex(knex);
          return knex;
        },
      },
    ];
  }
  console.log(`Database connected in ${enviroment} mode`);
  return [
    ...modelProviders,
    {
      provide: 'KnexConnection',
      useFactory: async () => {
        const knex = Knex({
          client: 'postgresql',
          connection: {
            database: `${POSTGRES_DB}`,
            user: `${POSTGRES_USER}`,
            password: `${POSTGRES_PASSWORD}`,
            debug: process.env.KNEX_DEBUG === 'true',
            ...knexSnakeCaseMappers(),
          },
        });

        Model.knex(knex);
        return knex;
      },
    },
  ];
};
const providers = chooseDatabase(NODE_ENV);
@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
