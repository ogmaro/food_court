import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('addon_categories', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('brand_id').unsigned();
    table
      .foreign('brand_id')
      .references('id')
      .inTable('brands')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('addon_categories');
}
