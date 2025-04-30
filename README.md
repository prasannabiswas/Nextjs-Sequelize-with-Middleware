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
