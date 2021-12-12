import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";

import usersRoutes from "./routes/users.routes";
import { port } from "./config";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello World",
  });
});
app.use("/api/v1/auth", usersRoutes);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
