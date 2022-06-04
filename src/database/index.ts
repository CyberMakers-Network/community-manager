import { logger } from "cyber-logger";
import { connect } from "mongoose";

import { DatabaseError } from "../errors";

export default class Database {
  public static connect(): void {
    connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        dbName: process.env.MONGO_COLLECTION,
        auth: {
          username: process.env.MONGO_USER,
          password: process.env.MONGO_PASS,
        },
      },
      (err) => {
        if (err) {
          logger.error(`Database not is connected.`);
          throw new DatabaseError(err);
        } else {
          logger.info("Database is connected.");
        }
      }
    );
  }
}
