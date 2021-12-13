import express from "express";

import userRoutes from "./users.routes";

const router = express.Router();
const apiRouter = express.Router();

apiRouter.use("/auth", userRoutes);

router.use("/api/v1", apiRouter);
export default router;
