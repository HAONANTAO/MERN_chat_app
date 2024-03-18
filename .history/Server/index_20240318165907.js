import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserModel from "./models/User.js";
import bodyParser from "body-parser";

const app = express();
// 自定义端点
const port = 5555;
// 使用 body-parser 中间件解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const dotenv = dotenv;
// 方便从env file拿到变量去nodejs
dotenv.config();
const DatabaseUrl = process.env.MONGODB_URL;
mongoose.connect(DatabaseUrl);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// resgiter注册页面post请求
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  UserModel.create();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
