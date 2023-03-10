import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('brands').del();

  // Inserts seed entries
  await knex('brands').insert([
    {
      name: 'Bukka Hut',
      user_id: 1,
      description: 'We see the best amala',
    },
    { name: 'Iya Oyo', user_id: 2, description: 'We see the best Ogufe' },
    {
      name: 'Amala Shitter',
      user_id: 3,
      description: 'We see the best Ewedu',
    },
  ]);
}
