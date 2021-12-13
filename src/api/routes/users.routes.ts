import { Router, Request, Response } from "express";

import * as userController from "../controllers/userController";

const router = Router();

router.route("/login").post(userController.login);

export default router;
