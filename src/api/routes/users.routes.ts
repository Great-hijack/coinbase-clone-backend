import { Router, Request, Response } from "express";

import * as userController from "../controllers/userController";
const { API } = require("../../utils/Constants");
const router = Router();

router.route(API.AUTH.LOGIN).post(userController.login);

export default router;
