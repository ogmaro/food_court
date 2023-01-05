import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('addon_categories').del();

  // Inserts seed entries
  await knex('addon_categories').insert([
    { id: 1, name: 'Protien' },
    { id: 2, name: 'Sugar' },
    { id: 3, name: 'Vitamin' },
  ]);
}
