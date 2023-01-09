import { Knex } from 'knex';
// import bcrypt from 'bcrypt';
// const saltRounds = 10;
// const Hash = async (password: string): Promise<string> => {
//   const newPassword = await bcrypt.hash(password, saltRounds);
//   return newPassword;
// };

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      first_name: 'Haruna',
      last_name: 'James',
      role_id: 1,
      email: 'haruna@yopmail.com',
      password: 'password',
    },
    {
      id: 2,
      first_name: 'Njoli',
      last_name: 'Patrick',
      email: 'njoli@yopmail.com',
      role_id: 1,
      password: 'password',
    },
    {
      id: 3,
      first_name: 'Emeka Collins',
      last_name: 'Patrick',
      role_id: 2,
      email: 'emeka@yopmail.com',
      password: 'password',
    },
  ]);
}
