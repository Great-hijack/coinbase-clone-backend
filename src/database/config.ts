const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = require("../config/config");
/*
 * preference
 * https://phoenixnap.com/kb/install-postgresql-windows
 * https://medium.com/@mghextreme/api-setup-using-nodejs-typescript-postgres-and-sequelize-48a0af72dda6
 */
const local = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
};

const test = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
};

const dev = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
};

const staging = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
};

const production = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
};

module.exports = {
  local,
  test,
  dev,
  staging,
  production,
};
