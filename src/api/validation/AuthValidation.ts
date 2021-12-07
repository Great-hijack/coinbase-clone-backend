import {NextFunction, Request, Response} from "express";
import logger from "../../config/logger";
import {check, validationResult} from "express-validator";
import ErrorHandler from "../../utils/ErrorHandler";


class AuthValidation {

    public async emailValidation(req: Request, res: Response, next: NextFunction) {
        await check("email", "Email cannot be blank").not().isEmpty().run(req);
        await check("email", "Email is not valid").isEmail().run(req);
        const errors = validationResult(req);
        logger.debug("emailValidation: ", errors);
        if (!errors.isEmpty()) {
            next(new ErrorHandler(401, errors.array()[0].msg));
        } else {
            next();
        }
    }
}

export = new AuthValidation();
