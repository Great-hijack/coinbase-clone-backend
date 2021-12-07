import * as winston from "winston";

const {createLogger, transports} = require("winston");
require("winston-daily-rotate-file");
const fs = require("fs");
const logDir = "log";

class LoggerClass {

    constructor(){
        this.makeLogDir();
    }
    get logger(){
       return createLogger({
            level: "debug",
            format: this.logFormat,
            transports: [
                new transports.Console({
                    level: 'debug',
                    format: this.logFormat
                }),
                this.dailyRotateFileTrasport
            ]
        });
    }

    private dailyRotateFileTrasport = new transports.DailyRotateFile({
        filename: `${logDir}/%DATE%-log.log`,
        datePattern: 'YYYY-MM-DD'
    });

    private makeLogDir(){
        if (!fs.existsSync(logDir)){
            fs.mkdirSync(logDir);
        }
    }

    private logFormat = winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )

}

export =  new LoggerClass().logger;
