import { NextFunction, Request, Response } from "express";
import { loggers } from "winston";

import logger from "../../../config/logger";
import User from "../../../database/schema/user";

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY, EXPIRE_TIME } = require("../../../config/vars");

class AuthController {
	public async login(req: Request, res: Response, next: NextFunction) {
		let { profileId } = req.body;

		try {
			const user = await User.findOne({ profileId: profileId });
			logger.debug(`-----login-------- : ${profileId}`);
			logger.debug("login", user);
			if (user == null) {
				return res.status(200).json({ success: 0, msg: "User not exist." });
			}
			return res
				.status(200)
				.json({ success: 1, msg: { balanceHistory: user.balanceHistory } });
		} catch (err) {
			logger.debug(`---login_error---- : ${err.message}`);
			return res
				.status(500)
				.json({ success: 0, msg: "Something wrong while login." });
		}
	}
}

export = new AuthController();
