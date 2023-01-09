import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('addons').del();

  // Inserts seed entries
  await knex('addons').insert([
    {
      name: 'Goat meat',
      description: 'This is a nice description for this addon',
      price: 250,
      category_id: 1,
      brand_id: 1,
    },
    {
      name: 'Peak milk',
      description: 'This is a nice description for this addon',
      price: 300,
      category_id: 3,
      brand_id: 1,
    },
    {
      name: 'Apple',
      description: 'This is a nice description for this addon',
      price: 150,
      category_id: 2,
      brand_id: 2,
    },
  ]);
}
