import mongoose, { mongo } from "mongoose";
import configENV from "./config";
export async function startConnection(): Promise<void> {
  await mongoose.connect(configENV.DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Database is connected");
}
