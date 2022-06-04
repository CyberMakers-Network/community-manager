import { logger } from "cyber-logger";
import { Model, Types } from "mongoose";

import { RepositoryError } from "../errors";

export class BaseRepository {
  private model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async get(id: string | Types.ObjectId): Promise<any> {
    const content = await this.model.findById(id);

    if (!content) {
      logger.error("No data matching the id.");
      throw new RepositoryError("No data matching the id.");
    }

    return content;
  }

  async getAll(): Promise<any> {
    const contents = await this.model.find();

    if (contents.length === 0) {
      logger.error("There are no recorded data");
      throw new RepositoryError("There are no recorded data");
    }

    return contents;
  }

  async create(model: any): Promise<any> {
    return this.model.create(model);
  }

  async update(id: string | Types.ObjectId, model: any): Promise<any> {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: model },
      { new: true, returnOriginal: false }
    );
  }

  async delete(id: string | Types.ObjectId): Promise<any> {
    return this.model.findOneAndDelete({ _id: id });
  }
}
