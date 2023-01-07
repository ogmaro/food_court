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
      firstName: 'Njoli',
      lastName: 'Patrick',
      roleId: 1,
      email: 'ogmaro1@yopmail.com',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Njoli',
      lastName: 'Patrick',
      email: 'ogmaro2@yopmail.com',
      roleId: 1,
      password: 'password',
    },
    {
      id: 3,
      firstName: 'Njoli',
      lastName: 'Patrick',
      roleId: 2,
      email: 'ogmaro3@yopmail.com',
      password: 'password',
    },
  ]);
}
