import mongoose from "mongoose";
const URL = process.env.connectionStr;

const connectDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Database already connected!");
    return;
  }
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully...");
  } catch (err) {
    console.log(URL);
    console.log(`Unable to connect: ${err}`);
  }
};

export default connectDB;
