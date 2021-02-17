const express = require("express");

const app = express();

// 以当前目录作为静态文件目录
app.use(express.static(__dirname));

app.listen(3004);
