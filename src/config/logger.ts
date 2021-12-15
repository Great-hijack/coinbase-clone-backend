import winston from "winston";
import WinstonCloudwatch from "winston-cloudwatch";
require("winston-daily-rotate-file");

const { env } = require("./config");

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

const serverLogTransports = (environment: string) => {
  let transports: any = [];

  switch (environment) {
    case "add-db":
    case "test":
      transports = [
        new winston.transports.File({
          filename: "logs/server/server-error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "logs/server/server-combined.log",
        }),
        new winston.transports.File({
          filename: "logs/server/server-debug.log",
          level: "debug",
        }),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ];
      break;
    case "dev":
      transports = [
        new winston.transports.File({
          filename: "logs/server/server-error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "logs/server/server-combined.log",
        }),
        new winston.transports.File({
          filename: "logs/server/server-debug.log",
          level: "debug",
        }),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ];
      break;
    case "staging":
      transports = [
        new winston.transports.File({
          filename: "logs/server/server-error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "logs/server/server-combined.log",
        }),
        new winston.transports.File({
          filename: "logs/server/server-debug.log",
          level: "debug",
        }),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ];
      break;
    case "production":
      transports = [
        new winston.transports.File({
          filename: "logs/server/server-error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "logs/server/server-combined.log",
        }),
        new winston.transports.File({
          filename: "logs/server/server-debug.log",
          level: "debug",
        }),
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ];
      break;
    default:
      transports = [];
  }

  return transports;
};

const serverLogger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: serverLogTransports(env),
});

export = serverLogger;
