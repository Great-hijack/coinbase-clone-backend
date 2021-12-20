import express from "express";

import userRoutes from "./users.routes";
const { API } = require("../../utils/Constants");
const router = express.Router();
const apiRouter = express.Router();

apiRouter.use(API.AUTH.BASE, userRoutes);

router.use(API.BASE_API, apiRouter);
export default router;
