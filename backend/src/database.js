import dotenv from "dotenv";
import mongoose from "mongoose";

export const database = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error(error);
  }
};
