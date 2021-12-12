import { Router, Request, Response } from "express";

import User, { UserMap } from "../models/user";
import History, { HistoryMap } from "../models/history";
import database from "../database";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  let { profileId } = req.body;
  UserMap(database);
  try {
    const user = await User.findOne({
      where: {
        profileId: profileId.toString(),
      },
    });
    if (user == null) {
      return res.status(200).json({ success: 0, msg: "User not exist." });
    }
    HistoryMap(database);
    const balanceHistory = await History.findAll({
      where: {
        profileId: profileId.toString(),
      },
    });
    res
      .status(200)
      .json({ success: 1, msg: { balanceHistory: balanceHistory } });
  } catch (err) {
    console.log("-----login-----", err);
    return res
      .status(500)
      .json({ success: 0, msg: "Something wrong while login." });
  }
});

export default router;
