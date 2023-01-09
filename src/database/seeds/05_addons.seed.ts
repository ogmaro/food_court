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
      categoryId: 1,
      brandId: 1,
    },
    {
      name: 'Peak milk',
      description: 'This is a nice description for this addon',
      price: 300,
      categoryId: 3,
      brandId: 1,
    },
    {
      name: 'Apple',
      description: 'This is a nice description for this addon',
      price: 150,
      categoryId: 2,
      brandId: 2,
    },
  ]);
}
