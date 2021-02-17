### cors，纯后端提供

在开发中最常用的：安全性高 原理: 靠的不是浏览器，而是服务端验证

```
Access to XMLHttpRequest at 'http://localhost:3002/getData' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

服务端返回的结果被浏览器屏蔽掉了
origin:当前访问服务器的是哪个源