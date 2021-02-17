const express = require("express");

const app = express();

const whiteList = ["http://localhost:3001"];
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  next();
});
app.get("/getData", (req, res) => {
  res.end("getdata 接口返回的数据111");
});

app.listen(3002);
