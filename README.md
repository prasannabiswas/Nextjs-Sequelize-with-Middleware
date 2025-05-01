/src
│
├── /app
│   ├── /page.ts                 # Main page (Home)
│   ├── /layout.ts               # Root layout with dbInit() call, providers/styles   
│   ├── /globals.css             # Global styles (CSS/Tailwind)
│   ├── /login
│   │   └── /page.tsx          # Login Page UI + form
│   ├── /signup
│   │   └── /page.tsx          # Signup Page UI + form
│
├── /api
│   ├── /themes
│   │    └── route.ts            # API: GET/POST themes
│   ├── /auth
│   │    └── route.ts            # API: Auth login/signup handlers
│   └── /users
│        └── route.ts            # API: User CRUD
│
├── /components
│   └── ThemeSwitcher.ts         # UI Component for theme switching
│
├── /config
│   ├── config.ts                # Sequelize options config (optional)
│   └── redis.ts                 # Redis connection setup
│
├── /context
│   └── ThemeContext.ts          # Global Theme State (React Context)
│
├── /lib
│   ├── db.ts                    # Sequelize instance (Postgres connection)
│   └── rateLimiter.ts           # Rate limiting logic (using Redis)
│
├── /middleware
│   ├── protectedRoute.ts        # Auth middleware (JWT/session)
│   ├── auth.ts                  # Auth middleware (JWT/session) - (you might merge these two later)
│   └── rateLimit.ts             # Rate limiter middleware (Redis)
│
├── /models
│   ├── index.ts                 # Sequelize init, dbInit(), and sync models
│   ├── theme.ts                 # Theme model
│   └── user.ts                  # User model (Signup/Login related)
│
├── /services
│   ├── themeService.ts          # Business logic for themes
│   └── userService.ts           # Business logic for user signup/login (bcrypt, jwt etc.)
│
├── /utils
│   ├── session.ts               # JWT encryption, decryption, and session storage
│   ├── helpers.ts               # Common utility functions
│   └── validators.ts            # Data validation for incoming requests
│
├── middleware.ts                # Next.js middleware (for protected routes)
│
├── /public                      # Static assets (images, fonts, etc.)
│
└── .env                         # Environment variables (Postgres, Redis, JWT Secret)


<!-- Sequelize setup -->

Step 1: 
$ npm i sequelize-typescript --save
$ npm install --save-dev sequelize-cli
$ npm install --save-dev dotenv-cli
$ npx sequelize-cli init

Step 2:
Create a database folder in root of next.
Move config, seeder, migrations folder inside database created folder, delete model folder.
As per the files indside the database edit those files.
Add `.sequelizerc` file in root of the project and follow this file structure.
Add scripts in package.json file for migration.

Step 3:
Run 
$ npm run migration:create -- --name `table_name_as_per_the_need`
Then change the migrated file from migrations to new migration for up and down.
Again run,
$ npm run migrate


Step 4: 
Install running commands
$ npm install -g sequelize-auto
$ npm install -g pg pg-hstore
Run 
$ sequelize-auto -h localhost -d `db_name_as_per_the_need` -u `user_name_as_per_the_need` -x root -p 5432 -e postgres -o "./models" -l ts --caseModel p --caseFile c
 --alternatively,
$ npx sequelize-auto -o "./models" -d circle_dev -h localhost -u postgres -p 5432 -x root -e postgres -l ts