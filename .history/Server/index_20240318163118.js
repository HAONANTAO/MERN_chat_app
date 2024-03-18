import express from "express";

const app = express();

// 自定义断电
const port = 5555;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/test", (req, res) => {
  res.send("test parts");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
