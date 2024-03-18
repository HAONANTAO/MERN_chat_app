import express from "express";

const app = express();

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
