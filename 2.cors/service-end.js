const express = require("express");

const app = express();

const whiteList = ["http://localhost:3001"];
app.get("/getData", (req, res) => {
  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.end("getdata 接口返回的数据11");
});

app.listen(3002);
