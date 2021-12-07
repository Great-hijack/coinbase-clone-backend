import { Connection } from "typeorm";
import ErrorHandler from "../utils/ErrorHandler";
import mongoose from "mongoose";
const {MongoUri} =  require("../config/vars");

class database {
  public db: Connection | undefined;
  private mongoUri: string;

  constructor() {
    this.mongoUri = String(MongoUri);
  }

  public mongoConnect() {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(this.mongoUri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          autoIndex: true,
        })
        .then(() => {
          resolve("MongoDB successfully connected");
        })
        .catch((err: ErrorHandler) => reject(err));
    });
  }
}

let db: database = new database();
export = db;
