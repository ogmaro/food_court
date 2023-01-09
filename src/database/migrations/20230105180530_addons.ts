import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('addons', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description').nullable();
    table.integer('price').notNullable();
    table.integer('category_id').unsigned();
    table
      .foreign('category_id')
      .references('id')
      .inTable('addon_categories')
      .onDelete('CASCADE');
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
  return knex.schema.dropTableIfExists('addons');
}
