import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";

import routes from "./api/routes/index";
import { port } from "./config/config";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
