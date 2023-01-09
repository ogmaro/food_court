# FOOD COURT ASSESMENT API
## Description
A backend API for a meal management application that allows users to create, read, update, and delete
meal addons.

## Schema Design
This schema allows you to store multiple roles, users, brands, addons and addon_categories, and also
allows users to create multiple brands lists. The brands reference the users table with a foreign key
user_id. The addon references the brands and addons_catgories with a foreign key brand_id and
category_id. The user references the role id using role_id.
<p align="center">
 <a href="https://ibb.co/yhZN3sG"><img src="https://i.ibb.co/HNbKJg1/schema.png" alt="Database schema" border="0" width="720"/></a>
</p>


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

#Install knex globally if not available
$ npm install -g knex

# Go into the app directory
$ npm run migrate:seed:all:dev

# There is a similar script to run this in production mode using 
$ npm run migrate:seed:all:prod

```

## Running the Application

```bash
# Go into the app directory
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

## Stay in touch

- Author - [Njoli Patrick](https://www.linkedin.com/in/ogmaro/)
- Twitter - [@_ogmaro](https://twitter.com/_ogmaro)

## License

Nest is [MIT licensed](LICENSE).
