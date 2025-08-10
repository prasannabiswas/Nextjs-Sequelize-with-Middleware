# Create the README.txt content (same as README.md)

readme_txt_path = Path("/mnt/data/readme.txt")
readme_txt_path.write_text("""# Circle Next App

A Next.js + TypeScript application using Sequelize ORM with PostgreSQL.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Database Setup](#database-setup)
- [Migrations](#migrations)
- [Generating Models from an Existing DB](#generating-models-from-an-existing-db)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React 19, Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **ORM**: [Sequelize](https://sequelize.org/)
- **Database**: PostgreSQL
- **Auth & Crypto**: bcryptjs, jose
- **TypeScript** for static typing

---

## Project Setup

1. **Install dependencies**
   npm install

2. **Run in development**
   npm run dev

3. **Build for production**
   npm run build
   npm start

---

## Database Setup

This project uses Sequelize CLI with PostgreSQL.

### 1. Install required dependencies

Already included in package.json:
npm install sequelize pg pg-hstore
npm install --save-dev sequelize-cli dotenv-cli

### 2. Initialize Sequelize CLI

npx sequelize-cli init

Then move the generated config/, migrations/, and seeders/ folders into a new database/ folder.

### 3. .sequelizerc configuration

In the project root, create .sequelizerc:

const path = require('path');

module.exports = {
'config': path.resolve('database', 'config', 'config.js'),
'migrations-path': path.resolve('database', 'migrations'),
'seeders-path': path.resolve('database', 'seeders')
};

### 4. Database config

database/config/config.js:
require('dotenv').config();

module.exports = {
development: {
url: process.env.DATABASE_URL,
dialect: 'postgres',
logging: false
},
production: {
url: process.env.DATABASE_URL,
dialect: 'postgres',
dialectOptions: process.env.PGSSLMODE === 'require'
? { ssl: { require: true } }
: {},
logging: false
}
};

---

## Migrations

### Create a migration

npm run migration:create -- --name create_users

### Apply migrations

npm run migrate

### Rollback last migration

npm run migrate:rollback

### Rollback all migrations

npm run migrate:rollback:all

### Run migrations in production

npm run migrate:prod

---

## Generating Models from an Existing DB

You can reverse-engineer models from an existing PostgreSQL database using sequelize-auto.

### Example:

npx sequelize-auto \
 -o "./models" \
 -d circle_dev \
 -h localhost \
 -u postgres \
 -p 5432 \
 -x root \
 -e postgres \
 -l ts \
 --caseModel p \
 --caseFile c

--caseModel p → PascalCase model names
--caseFile c → camelCase filenames

---

## Scripts

From package.json:

dev → Run Next.js in dev mode with Turbopack
build → Build for production
start → Start production build
lint → Run ESLint
migration:create → Create a new Sequelize migration
migrate → Apply pending migrations
migrate:rollback → Undo last migration
migrate:rollback:all → Undo all migrations
migrate:prod → Run migrations with .env.production

---

## Environment Variables

Create .env.local for development and .env.production for production.

Example .env.local:
DATABASE_URL=postgres://postgres:root@localhost:5432/circle_dev
PGSSLMODE=disable

For production:
DATABASE_URL=postgres://user:pass@host:5432/dbname
PGSSLMODE=require

---

## Notes

- This setup avoids sequelize-typescript to prevent deprecated dependencies like glob@7/inflight.
- All models are defined with plain Sequelize + TypeScript typings.
- Use npm-check-updates to keep dependencies fresh:
  npx npm-check-updates -u
  npm install

---

""")
