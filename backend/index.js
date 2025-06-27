import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";
import jwt from "jsonwebtoken";

const mongoURL =
  "mongodb+srv://tasheen:JackCM%403003@cluster0.0ldrk4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, []);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database is connected");
});

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.header("authorization")?.replace("Bearer ", "");
  console.log(token);
  if (token != null) {
    jwt.verify(token, "tash-secret-key-2002", (error, decoded) => {
      if (!error) {
        // console.log(decoded);
        req.user=decoded;
      }
    });
  }
  next();
});

app.use("/api/students", studentRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
