import dotenv from "dotenv";

// load the environment variables from the .env file
dotenv.config({
	path: ".env",
});

module.exports = {
	env: process.env.NODE_ENV,
	APP_PORT: process.env.APP_PORT,
	MongoUri: process.env.MongoUri,
	SECRET_KEY: process.env.SECRET_KEY,
	EXPIRE_TIME: process.env.EXPIRE_TIME,
};
