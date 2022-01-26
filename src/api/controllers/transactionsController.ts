import { NextFunction, Request, Response } from "express";

import Transactions, {
  TransactionsMap,
} from "../../database/models/transactions";

import serverLogger from "../../config/logger";
import sequelize from "../../config/database";

export const symbolGroupTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileid } = req.body;

  try {
    TransactionsMap(sequelize);
    const query = `SELECT coinsymbol, SUM(balance) FROM transactions WHERE profileid = '${profileid}'  GROUP BY coinsymbol ;`;
    const transactionData = await Transactions.sequelize?.query(query);
    res.status(200).json({
      success: 1,
      msg: { data: transactionData ? transactionData[0] : [] },
    });
  } catch (err) {
    serverLogger.info(`login error : ${err}`);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while login." });
  }
};

export const typesTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileid, coinsymbol } = req.body;

  try {
    TransactionsMap(sequelize);
    const query = `SELECT coinsymbol, types, SUM(balance) FROM transactions WHERE profileid = '${profileid.toString()}' AND coinsymbol = '${coinsymbol}' GROUP BY coinsymbol, types;`;
    const transactionData = await Transactions.sequelize?.query(query);

    res.status(200).json({
      success: 1,
      msg: { typesData: transactionData ? transactionData[0] : [] },
    });
  } catch (err) {
    serverLogger.info(`login error : ${err}`);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while getting data." });
  }
};

export const symbolsTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileid, coinsymbol } = req.body;
  try {
    TransactionsMap(sequelize);

    const symbolTransactions = await Transactions.findAll({
      where: {
        profileid: profileid,
        coinsymbol: coinsymbol,
      },
    });
    res.status(200).json({
      success: 1,
      msg: { symbolTransactions: symbolTransactions },
    });
  } catch (err) {
    serverLogger.info(`login error : ${err}`);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while getting data." });
  }
};

export const allTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileid } = req.body;
  try {
    TransactionsMap(sequelize);

    const symbolTransactions = await Transactions.findAll({
      where: {
        profileid: profileid,
      },
    });
    res.status(200).json({
      success: 1,
      msg: { symbolTransactions: symbolTransactions },
    });
  } catch (err) {
    serverLogger.info(`login error : ${err}`);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while getting data." });
  }
};
