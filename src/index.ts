import http from "http";

import dbService from "./services/dbService";
import serverLogger from "./config/logger";

const app = require("./config/express");
// import app from "./config/express";
const { env, PORT } = require("./config/config");
const server = http.createServer(app);
server.listen(PORT, () => {
  serverLogger.info(`server started on port ${PORT} (${env})`);
  const DB = dbService(env).start();
  return DB;
});
