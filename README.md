<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

<p align="center">
 <a href="https://ibb.co/yhZN3sG"><img src="https://i.ibb.co/HNbKJg1/schema.png" alt="Database schema" border="0" width="720"/></a>
</p>
```bash

 <!-- This schema allows you to store multiple roles, users, brands, addons and addon_categories, and also
allows users to create multiple brands lists. The brands reference the users table with a foreign key
user_id. The addon references the brands and addons_catgories with a foreign key brand_id and
category_id. The user references the role id using role_id. -->

```



## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation 

```bash
# Clone the Repository
$ git clone git@github.com:ogmaro/food_court.git

# Install node dependencies
$ npm install

# Create a .env file and copy contents of .example.env into .env. e.g:
NODE_ENV=dev 
PORT=5000

KNEX_DEBUG=true
POSTGRES_DB=food_court_dev
POSTGRES_USER=YOUR_DATABASE_USERNAME
POSTGRES_PASSWORD=YOUR_DATABASE_PASSWORD
JWT_SECRET=YOUR_SECRET

DATABASE_URL=WILL BE PROVIDE ON DRIVE LINK


# Run database migration and seed data into the database using the script command
$ npm run migrate:seed:all:dev
# There is a similar script to run this in production mode using 
$ npm run migrate:seed:all:prod



```

## Running the app in dev mode

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#Link to documented endpoints
http://localhost:PORT/api-doc
```

## Test

```bash
# unit tests
$ npm run test

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://ogmaro.github.io/site/)
- Twitter - [@nestframework](https://twitter.com/_ogmaro)

## License

Nest is [MIT licensed](LICENSE).
