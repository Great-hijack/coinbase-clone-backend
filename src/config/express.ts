import express, { Request, Response } from "express";
import cors from "cors";
import MasterRouter from "../api/routers/MasterRouter";
import ErrorHandler from "../utils/ErrorHandler";
import logger from "../api/middlewares/LoggerMiddleware";
import bodyParser from "body-parser";
import database from "../database/database";
import loggers from "./logger";
import path from "path";

const { API } = require("../utils/Constants");

class Express {
	public app: express.Application;
	public router = MasterRouter;

	constructor() {
		this.app = express();
		this.initializeMiddlewares();
		this.initializeDatabase();
		this.initializeRouter();
		this.initializeErrorHandler();
	}

	private initializeDatabase() {
		database
			.mongoConnect()
			.then((result) => console.log(result))
			.catch((error) => console.log(error));
	}

	private initializeMiddlewares() {
		this.app.use(logger);
		this.app.use(cors());
		this.app.use(bodyParser.json()); //support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({ extended: false })); //for routing the http request to controller
	}

	private initializeRouter() {
		this.app.use(API.BASE_API, this.router);
		this.app.use(express.static(path.join(__dirname, "../../public")));
	}

	private initializeErrorHandler() {
		this.app.use((err: ErrorHandler, req: Request, res: Response) => {
			res.status(err.statusCode || 500).json({
				status: "error",
				statusCode: err.statusCode,
				message: err.message,
			});
		});
	}

	public listen(port: any) {
		this.app.listen(port, () => {
			loggers.debug(`App listening on the ports ${port}`);
		});
	}
}

export = new Express();
