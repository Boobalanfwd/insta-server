import express from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";
import path from "path";

config();

const PORT = 8081;

const app = express();

app.use(cors({
  origin: 'https://insta-client-ruby.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'], 
}));

app.use(express.json());

app.use(router);

app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

mongoose
  .connect(
    "mongodb+srv://boobalan12:3gWlMpNud4dhzxL4@boobalan12.aqlq7oj.mongodb.net/instagram"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.listen(PORT, () => {
  console.log("Server is running");
});
