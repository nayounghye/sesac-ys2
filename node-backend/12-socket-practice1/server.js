// socket은 http모듈로 생성된 서버에서만 동작한다.
const http = require("http");
const express = require("express");
const app = express();
const PORT = 8000;
// socket은 http를 써야하고 http를 app객체를 연결해줘야 한다.
const server = http.createServer(app);

const io = require("socket.io")(server);
// 아래 두줄을 줄여서 위 코드로 작성한 것!
// const Socket = require("socket.io")
// const id = Socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client");
});

io.on("connection", (socket) => {
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("hh", { msg: "죠하!" });
  });

  socket.on("study", (res) => {
    console.log(res);
    socket.emit("ss", { msg: "죠스!" });
  });

  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("bb", { msg: "죠바!" });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
