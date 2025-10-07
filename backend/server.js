import express from "express";
import cors from "cors";
import "dotenv/config";
import connectMongoDB from "./config/mongodb.js";

//app config
const app = express();
const port = process.env.PORT || 5000;
connectMongoDB();

//middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

//routes
app.get("/api/auth");

//app start server
app.listen(port, () => {
  console.log("Server running");
});
