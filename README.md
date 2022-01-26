# How to SetUp Database?

1. You should have **"postgres"** user available in your postgres eco-system.
2. **Create a database** with a name of your choice & assign **"postgres"** user to the database, **admin** as password.
3. You should put your DB connection string to DATABASE_URL environment variable(e.g. DATABASE_URL=postgres://username:password@localhost:5432/conibase).
4. You should run **yarn run migrate up** in terminal.

# How to Add Data to Database?

1. You should add data in mockup/database.json file. Follow style as same as content in database.json .
2. Open mockup/add_data.js file and change values for database setting with your database values.
   (e.g
   const pool = new Pool({
   user: "postgres",
   host: "localhost",
   database: "coinbase",
   password: "admin",
   port: "5432",
   });
   ).
   3.You should run **yarn add_data** in terminal,then data in database.json is added in db.

# How to run server?

Please enter **yarn run build** in your terminal at first.
After done, **yarn run start** in your terminal.
