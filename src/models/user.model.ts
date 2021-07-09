import { Schema, model, Document } from "mongoose";
export interface IUser extends Document {
  //string porque usa ts
  name: string;
  email: string;
  password: string;
  img: string;
  role: string;
  active: boolean;
  google: boolean;
}
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "The field name is required"],
  },
  email: {
    type: String,
    required: [true, "The field email is required"],
  },
  password: {
    type: String,
    required: [true, "The field password is required"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "USER_ROLE",
  },
  active: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

export default model<IUser>("User", userSchema);
