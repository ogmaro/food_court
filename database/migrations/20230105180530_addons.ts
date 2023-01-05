import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('addons', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.integer('categoryId').unsigned();
    table
      .foreign('categoryId')
      .references('id')
      .inTable('addon_categories')
      .onDelete('CASCADE');
    table.integer('brandId').unsigned();
    table
      .foreign('brandId')
      .references('id')
      .inTable('brands')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('addons');
}
