const express = require("express");

const app = express();

app.get("/getData", (req, res) => {
  res.end("getdata 接口返回的数据11");
});

app.listen(3002);
