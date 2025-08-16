
# Nextjs-Sequelize Setup with RTK-Query

A boilerplate starter for building scalable apps with Next.js, Sequelize ORM, and RTK Query, implemented with Postgres.
Comes with ready-to-use API integration, database setup, and state management out of the box.

## Tech Stack

**Client:** Next.js 15, RTK Query, TailwindCSS, Shadcn, Framer Motion, Next-Themes  

**Server:** Node.js, Express, PostgreSQL, Sequelize

## Documentation

- [Basic Installation](#-basic-setup-system-installation)
- [Sequelize Setup](#-sequelize-setup-guide-pre-integrated)
- [API Reference](#api-reference)

## 🔧 Basic Setup (System Installation)

1. Clone the repository,
Open your terminal and run:

```bash
git clone https://github.com/prasannabiswas/Nextjs-Sequelize-with-Middleware.git
```

2. Set up environment variables,
Find the file named env.example.

Rename it to .env (or .env.local, depending on your environment).

Install dependencies
Inside the project folder, run:
    

```bash
npm install
```

## 🛠️ Sequelize Setup Guide (Pre-Integrated)

1. Install required dependencies:

```bash
npm install sequelize pg pg-hstore
npm install --save-dev sequelize-cli dotenv-cli
npx sequelize-cli init
```

2. Organize project structure,

Create a database folder in the root of your Next.js project.

Move the config, seeders, and migrations folders inside the new database folder.

Delete the default models folder.

Add a .sequelizerc file in the root to map Sequelize paths properly.

Update package.json with migration scripts.

3. Create and run migrations.

```bash
npm run migration:create -- --name <table_name_as_needed>
```

Edit the generated migration file for up and down logic.

Run migrations:

```bash
npm run migrate
```

4. Generate models from an existing database.
Install Sequelize Auto (for reverse-engineering database models):

```bash
npm install -g sequelize-auto
```

Run the following command:

```bash
npx sequelize-auto -o "./models" -d <db_name> -h <host_name> -u <your_username> \
-p <port_number> -x <your_password> -e postgres -l ts
```
👉 This gives you a clean Sequelize + Postgres setup inside Next.js, with optional TypeScript typings for models.
# API Reference

All routes live under src/app/api/* and use the App Router (app/) convention.

## Auth

#### Signup

Create a new user account.

```http
POST /api/auth/signup
```
#### Request body
```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "Str0ngP@ss!"
}
```

#### Responses 201 Created

```json
{
  "success": true,
  "status": 201
}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**.              |
| `email`   | `string` | **Required**.              |
| `password`| `string` | **Required**.              |

- Passwords are stored as hashes (bcrypt).
- Email uniqueness is enforced at the DB level.

#### Login

Authenticate a user and return a session/JWT.

```http
POST /api/auth/login
```

#### Request body
```json
{
  "email": "ada@example.com",
  "password": "Str0ngP@ss!"
}
```

#### Responses 201 Created

```json
{
  "success": true
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `string` | **Required**.                     |
| `password`| `string` | **Required**.                     |


- The token is saved in session cookies.

