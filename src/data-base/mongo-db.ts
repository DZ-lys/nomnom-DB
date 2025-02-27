import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

export async function connectMongoDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("connected");
  } catch (error) {
    console.log("Error", error);
  }
}
