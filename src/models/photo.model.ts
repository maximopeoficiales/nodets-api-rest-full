import { Schema, model, Document } from "mongoose";
export interface IPhoto extends Document {
  //string porque usa ts
  title: string;
  description: string;
  imagePath: string;
}
const photoSchema = new Schema({
  title: String,
  description: String,
  imagePath: String,
});

export default model<IPhoto>("Photo", photoSchema);
