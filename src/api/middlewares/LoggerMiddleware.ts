import {Request, Response, NextFunction} from 'express';


class LoggerMiddleware {

    public logger(req: Request, res: Response, next: NextFunction ) {
        console.log(`${req.method}  : ${req.path}`);
        next()
    }
}

export = new LoggerMiddleware().logger;
