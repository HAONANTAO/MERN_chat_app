import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserModel as User } from "./models/User";
const app = express();
// 自定义端点
const port = 5555;

// const dotenv = dotenv;
// 方便从env file拿到变量去nodejs
dotenv.config();
const DatabaseUrl = process.env.MONGODB_URL;

mongoose.connect(DatabaseUrl);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("test parts");
});

// resgiter注册页面post请求
app.post("/register", (req, res) => {
  User;
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
