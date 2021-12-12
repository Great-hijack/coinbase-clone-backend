import { db_host, db_port, db_name, db_user, db_password } from "./config";
import { Sequelize } from "sequelize";

export default new Sequelize({
  dialect: "postgres",
  host: db_host,
  port: db_port,
  database: db_name,
  username: db_user,
  password: db_password,
});

/*
 * preference
 * https://phoenixnap.com/kb/install-postgresql-windows
 * https://medium.com/@mghextreme/api-setup-using-nodejs-typescript-postgres-and-sequelize-48a0af72dda6
 */
