import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected.");
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected.");
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default connectDb;
