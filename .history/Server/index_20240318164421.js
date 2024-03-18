import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
// 自定义端点
const port = 5555;

const url = process.env.MONGODB_URL;
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
