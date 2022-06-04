import { model, Model, Schema } from "mongoose";
import { IUser } from "../interfaces";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  repository_url: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
});

const UserModel: Model<IUser> = model("UserModel", UserSchema);

export default UserModel;
