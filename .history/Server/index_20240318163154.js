import express from "express";

const app = express();

// 自定义端点
const port = 5555;

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
