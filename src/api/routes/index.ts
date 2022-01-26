import express from "express";
const router = express.Router();
const apiRouter = express.Router();

import userRoutes from "./users.routes";
import transactionsRoutes from "./transactions.routes";
const { API } = require("../../utils/Constants");

apiRouter.use(API.AUTH.BASE, userRoutes);
apiRouter.use(API.TRANSACTIONS.BASE, transactionsRoutes);

router.use(API.BASE_API, apiRouter);
export default router;
