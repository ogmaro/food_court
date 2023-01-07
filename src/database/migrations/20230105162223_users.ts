import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50).notNullable();
    table.string('email', 50).notNullable().unique();
    table.string('password', 100).notNullable();
    table.integer('roleId').unsigned();
    table
      .foreign('roleId')
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
