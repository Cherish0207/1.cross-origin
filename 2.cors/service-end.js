const express = require("express");

const app = express();

const whiteList = ["http://localhost:3001"];
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    /**
     * 如果 Access-Control-Allow-Origin 设置为 *，表示任何人都能访问，
     * 当设置为 * 时，不能和 Access-Control-Allow-Credentials 共用
     */
    res.setHeader("Access-Control-Allow-Origin", origin);
    // 允许携带哪个头访问我
    res.setHeader("Access-Control-Allow-Headers", "name1,name2");
    // 允许哪个方法访问我，默认支持get post head，不支持复杂的请求如put
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    // 预检的存活时间
    res.setHeader("Access-Control-Max-Age", 3600);
    // 允许携带cookie
    res.setHeader("Access-Control-Allow-Credentials", true);
    // 允许返回的头
    res.setHeader("Access-Control-Expose-Headers", "name");
    if (req.method === "OPTIONS") {
      res.end();
    }
  }
  next();
});
app.put("/getData", function (req, res) {
  console.log(req.headers);
  res.setHeader("name", "svs");
  res.end("getdata put 接口返回的数据222");
});
app.get("/getData", (req, res) => {
  res.end("getdata get 接口返回的数据111");
});

app.listen(3002);
