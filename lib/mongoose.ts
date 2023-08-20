import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // how Mongoose handles querying documents.

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not Found");

  if (isConnected) return console.log(" already MONGODB IS CONNECTED");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("MONGODB IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
