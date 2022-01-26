import { NextFunction, Request, Response } from "express";

import User, { UserMap } from "../../database/models/user";
import Transactions, {
  TransactionsMap,
} from "../../database/models/transactions";
import sequelize from "../../config/database";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileid } = req.body;
  UserMap(sequelize);
  try {
    const user = await User.findOne({
      where: {
        profileid: profileid.toString(),
      },
    });
    if (user == null) {
      return res.status(200).json({ success: 0, msg: "User not exist." });
    }
    TransactionsMap(sequelize);
    const balanceHistory = await Transactions.findAll({
      where: {
        profileid: profileid.toString(),
      },
    });
    res.status(200).json({
      success: 1,
      msg: { balanceHistory, notificationcount: user.notificationcount },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while login." });
  }
};
