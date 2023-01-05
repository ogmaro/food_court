import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('brands').del();

  // Inserts seed entries
  await knex('brands').insert([
    {
      id: 1,
      name: 'Bukka Hut',
      userId: 1,
      description: 'We see the best amala',
    },
    { id: 2, name: 'Iya Oyo', userId: 1, description: 'We see the best Ogufe' },
    {
      id: 3,
      name: 'Amala Shitter',
      userId: 1,
      description: 'We see the best Ewedu',
    },
  ]);
}
