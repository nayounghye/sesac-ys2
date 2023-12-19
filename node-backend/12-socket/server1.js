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
  res.render("client1");
});

// 클라이언트로부터 connection를 받을 수 있는 이벤트 등록
io.on("connection", (socket) => {
  // 콜백함수의 매개변수에 있는 socket 객체 : 접속한 클라이언트의  socket이다.
  // 위 socket 객체를 이용해 클라이언트에 객체를 전달하거나 등을 할 수 있음.
  console.log("socket.id : ", socket.id);

  // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를 받을 이벤트를 등록함.
  socket.on("hello", (res) => {
    // res에선 클라이언트에서 socket을 이용해 보내준 데이터를 받아온다.
    console.log(res);
    // 클라이언트로 bye를 보냄.
    socket.emit("bye", { msg: "죠바!" });
  });

  // 서버에서 io객체를 사용하면 클라이언트들 전체를 대상으로 하는 것!
  socket.on("entry", (res) => {
    console.log("entry : ", res);
    // 전체 클라이언트를 대상으로 데이터를 보낼 땐 io.meit 사용
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` });
  });
});

// 소켓을 사용하려면 app.listen -> server.listen으로 변경해줘야 함.
server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
