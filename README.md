# How to SetUp Database?

1. You should have **"postgres"** user available in your postgres eco-system.
2. **Create a database** with a name of your choice & assign **"postgres"** user to the database, **admin** as password.
3. You should put your DB connection string to DATABASE_URL environment variable(e.g. DATABASE_URL=postgres://username:password@localhost:5432/conibase).
4. You should run **npm run migrate up** in terminal.

# How to run server?

Please enter **yarn run build** in your terminal at first.
After done, **yarn run start** in your terminal.
