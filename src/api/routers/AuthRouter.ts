import { Router } from "express";

import AuthController from "../controllers/auth/AuthController";

const { API } = require("../../utils/Constants");

class AuthRouter {
	private _router = Router();
	private _controller = AuthController;

	get router() {
		return this._router;
	}

	constructor() {
		this._configure();
	}

	/**
	 * Connect routes to their matching controller endpoints.
	 */
	private _configure() {
		this._router.route(API.AUTH.LOGIN).post(this._controller.login);
	}
}

export = new AuthRouter().router;
