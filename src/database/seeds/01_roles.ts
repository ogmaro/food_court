import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('roles').del();

  // Inserts seed entries
  await knex('roles').insert([
    { id: 1, name: 'admin' },
    { id: 2, name: 'user' },
  ]);
}
