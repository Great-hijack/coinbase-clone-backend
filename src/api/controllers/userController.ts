import { NextFunction, Request, Response } from "express";

import User, { UserMap } from "../../database/models/user";
import History, { HistoryMap } from "../../database/models/history";
import sequelize from "../../config/database";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { profileId: profileid } = req.body;
  console.log("------login-----");
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
    HistoryMap(sequelize);
    const balanceHistory = await History.findAll({
      where: {
        profileid: profileid.toString(),
      },
    });
    res.status(200).json({ success: 1, msg: { balanceHistory } });
  } catch (err) {
    console.log("-----error----", err);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while login." });
  }
};
