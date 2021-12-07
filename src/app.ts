const { APP_PORT } = require("./config/vars");
import app from "./config/express";

class Server {
	public port: any;
	public app = app;

	constructor(port: any) {
		this.port = port;
	}

	public listen() {
		this.app.listen(this.port);
	}
}

// initialize server app
const server = new Server(APP_PORT);
server.listen();
