import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../../utils/ErrorHandler";

const jwt = require("jsonwebtoken");
const config = require("../../config/config");

class RouteMiddleware {
  isAuthenticated(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;

    if (token == undefined) {
      next(new ErrorHandler(401, "Invalid token"));
    }
    if (token?.startsWith("Bearer ")) {
      token = token.substr(7);
    }

    jwt.verify(
      token,
      config.secret,
      async (error: ErrorHandler, decoded: any) => {
        if (error) {
          next(error);
        }
        const now = Date.now();
        if (decoded == undefined) {
          next(new ErrorHandler(401, "Invalid token"));
        }

        if (now > decoded.expire) {
          next(new ErrorHandler(401, "Expired Token"));
        } else {
          req.body.userId = decoded.id;
          next();
        }
      }
    );
  }

  isAdmin(req: Request, res: Response, next: NextFunction) {
    next();
  }
}

export = new RouteMiddleware();
