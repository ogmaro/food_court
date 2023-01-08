import { Global, Module } from '@nestjs/common';
import Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { AddonModel } from '../models/addon.model';
import { CategoryModel } from '../models/addon_categories.model';
import { UserModel } from '../models/user.model';
import { BrandModel } from '../models/brand.model';
import enviromentVariables from '../config/enviroment';
import { RoleModel } from 'src/models/role.model';
const { POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, DATABSAE_URL } =
  enviromentVariables;

const models = [AddonModel, CategoryModel, BrandModel, UserModel, RoleModel];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
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

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
