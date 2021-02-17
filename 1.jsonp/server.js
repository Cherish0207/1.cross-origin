const express = require("express");
const app = express();
app.get("/say", function (req, res) {
  const { wd, cb } = req.query;
  res.end(`${cb}("服务端返回端数据")`);
});
app.listen(3000, () => {
  console.log("listening 3000 ");
});
