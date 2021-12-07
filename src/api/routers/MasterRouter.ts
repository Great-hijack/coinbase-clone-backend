import { Router } from "express";
import AuthRouter from "./AuthRouter";

const { API } = require("../../utils/Constants");

class MasterRouter {
	private _router = Router();
	private _subrouterAuth = AuthRouter;

	get router() {
		return this._router;
	}

	constructor() {
		this._configure();
	}

	private _configure() {
		this._router.use(API.AUTH.BASE, this._subrouterAuth);
	}
}

export = new MasterRouter().router;
