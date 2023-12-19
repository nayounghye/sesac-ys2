// socket은 http모듈로 생성된 서버에서만 동작한다.
const http = require("http");
const express = require("express");
const app = express();
const PORT = 8000;
// socket은 http를 써야하고 http를 app객체를 연결해줘야 한다.
const server = http.createServer(app);

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

// 소켓을 사용하려면 app.listen -> server.listen으로 변경해줘야 함.
server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
