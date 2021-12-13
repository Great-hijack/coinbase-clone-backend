import { Sequelize } from "sequelize";

const connection = require("../database/config");
const { env } = require("./config");

let sequelize: any;

switch (env) {
  case "production":
    sequelize = new Sequelize(
      connection.production.database,
      connection.production.username,
      connection.production.password,
      {
        host: connection.production.host,
        port: connection.production.port,
        dialect: connection.production.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
        },
        logging: connection.production.logging,
      }
    );
    break;
  case "staging":
    sequelize = new Sequelize(
      connection.staging.database,
      connection.staging.username,
      connection.staging.password,
      {
        host: connection.staging.host,
        port: connection.staging.port,
        dialect: connection.staging.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
        },
        logging: connection.staging.logging,
      }
    );
    break;
  case "dev":
    sequelize = new Sequelize(
      connection.dev.database,
      connection.dev.username,
      connection.dev.password,
      {
        host: connection.dev.host,
        port: connection.dev.port,
        dialect: connection.dev.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
        },
        logging: connection.dev.logging,
      }
    );
    break;
  case "test":
    sequelize = new Sequelize(
      connection.test.database,
      connection.test.username,
      connection.test.password,
      {
        host: connection.test.host,
        port: connection.test.port,
        dialect: connection.test.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
        },
        logging: connection.test.logging,
      }
    );
    break;
  default:
    sequelize = new Sequelize(
      connection.local.database,
      connection.local.username,
      connection.local.password,
      {
        host: connection.local.host,
        port: connection.local.port,
        dialect: connection.local.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        define: {
          charset: "utf8",
          collate: "utf8_general_ci",
        },
        logging: connection.local.logging,
      }
    );
}

// module.exports = sequelize;
export = sequelize;
