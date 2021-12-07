import { NextFunction, Response, Request } from "express";
import ErrorHandler from "../../utils/ErrorHandler";
import User from "../../database/schema/user";

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config/vars");

class AuthMiddleware {
	isAuthenticated(req: Request, res: Response, next: NextFunction) {
		let token = req.headers.authorization;
		console.log("isAuthenticated(), token: ", token);
		if (token == undefined) {
			next(new ErrorHandler(401, "Invalid token"));
		}
		if (token?.startsWith("Bearer")) {
			token = token.substr(7);
		}
		jwt.verify(token, SECRET_KEY, async (error: ErrorHandler, decoded: any) => {
			if (error) {
				// next(error)
				return res.status(401).json({ message: "Invalid token" });
			}
			const now = Date.now();
			if (decoded == undefined) {
				// next(new ErrorHandler(401, "Invalid token"));
				return res.status(401).json({ message: "Not define token" });
			}
			if (now > decoded.expire) {
				// next(new ErrorHandler(401, "Expired Token"));
				return res.status(401).json({ message: "Expired Token" });
			} else {
				req.body.id = decoded.id;
				console.log("isAuthenticated(), userId: ", req.body.id);
				next();
			}
		});
	}

	async isAliveUser(req: Request, res: Response, next: NextFunction) {
		const userId = req.body.id;
		try {
			const user = await User.findOne({ _id: userId });
			if (user == null) {
				return res.status(500).json({ message: "User doesn't exist." });
			}
			if (user.isAlive == 1) {
				next();
			} else {
				return res.status(500).json({ message: "This user is deleted." });
			}
		} catch (e) {
			return res.status(500).json({ message: "Alive User confirm failed." });
		}
	}
}

export = new AuthMiddleware();
