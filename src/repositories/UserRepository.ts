import UserModel from "../models/user";

import { BaseRepository } from "./BaseRepository";

export default class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }
}
