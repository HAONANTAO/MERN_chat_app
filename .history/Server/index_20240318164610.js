import express from "express";
import dotenv from "dotenv";

const app = express();
// const dotenv = dotenv;
// 方便从env file拿到变量去nodejs

// 自定义端点
const port = 5555;

const url = process.env.MONGODB_URL;
console.log(url);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("test parts");
});

// resgiter注册页面post请求
app.post("/register", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
