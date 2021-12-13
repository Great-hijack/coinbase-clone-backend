import * as dotenv from "dotenv";
dotenv.config({
  path: "${__dirname}/../.env",
});

module.exports = {
  env: process.env.NODE_ENV,
  PORT: Number(process.env.API_PORT),
  DB_HOST: String(process.env.DB_HOST),
  DB_PORT: Number(process.env.DB_PORT),
  DB_NAME: String(process.env.DB_NAME),
  DB_USER: String(process.env.DB_USER),
  DB_PASSWORD: String(process.env.DB_PASSWORD),
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
};
