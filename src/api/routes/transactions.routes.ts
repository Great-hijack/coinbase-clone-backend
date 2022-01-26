import { Router, Request, Response } from "express";

import * as transactionsController from "../controllers/transactionsController";
const { API } = require("../../utils/Constants");
const router = Router();

router
  .route(API.TRANSACTIONS.TYPES)
  .post(transactionsController.typesTransaction);
router
  .route(API.TRANSACTIONS.SYMBOLS)
  .post(transactionsController.symbolsTransaction);
router.route(API.TRANSACTIONS.ALL).post(transactionsController.allTransaction);

export default router;
