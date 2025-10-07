import mongoose from "mongoose";

const connectMongoDB = () => {
  mongoose.Connection.on("connected", () => {
    console.log("DB connected");
  });

  mongoose.connect(`${process.env.MONGODB_URI_STRING}/workforce`, {
    autoIndex: true,
  });
};

export default connectMongoDB;
