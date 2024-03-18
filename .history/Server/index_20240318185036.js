import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserModel from "./models/User.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
// 跨域
app.use(
  cors({
    origin: *, // 允许的来源
    credentials: true, // 允许发送凭据
  }),
);

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 自定义端点
const port = 5555;
// const dotenv = dotenv;
// 方便从env file拿到变量去nodejs
dotenv.config();
const DatabaseUrl = process.env.MONGODB_URL;
const jwtSecret = process.env.JWT_SECRET;
mongoose.connect(DatabaseUrl);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("test");
});
// resgiter注册页面post请求
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const findUser = await UserModel.findOne({ username });
  if (findUser) {
    res.json({ error: "already got this user!" });
  }
  const CreateUser = await UserModel.create({ username, password });
  jwt.sign({ userId: CreateUser._id }, jwtSecret, (err, token) => {
    if (err) {
      throw err;
    }
    res.cookie("token", token).status(201).json("JWT ok");
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
