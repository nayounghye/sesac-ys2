// -------- 리액트를 사용할 때 쓰는 server 기본틀 --------
// const http = require("http");
// const express = require("express");
// const app = express();
// const PORT = 8000;
// const server = http.createServer(app);

// const io = require("socket.io")(server);

// io.on("connection", (socket) => {

// });

// server.listen(PORT, function () {
//   console.log(`Sever Open: ${PORT}`);
// });
// -------- 리액트를 사용할 때 쓰는 server 기본틀 끝 --------

const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한하는 이슈. -> 클라이언트서버와 백엔드서버를 따로 둘 때 문제가 발생함!
// 아래는 cors 모듈 불러오고 사용한다는 코드이다
const cors = require("cors");
app.use(cors());

// 다른서버에서 오는 요청은 보안상 이유로 디폴트로 막는데, 이 서버는 안전해!라는 걸 내가 알려줘야함!
// cors 모듈을 사용해야 함!
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    // 나중에 get/post 요청들도 이런식으로 다 적어줘야함. 코드는 인터넷 찾아볼것!
  },
});

const userIdArr = {};
// { key : value }형태로 저장이 된다 -> {"socket.id": "user.id"}

io.on("connection", (socket) => {
  console.log("socket id : ", socket.id);
  //   실습 3 : socket id를 이용해 입장 공지
  io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  socket.on("entry", (res) => {
    // 실습 3-1 : 입장 시에 받은 user id로 입장 공지

    // 실습 3-2 : 닉네임 중복 여부에 따라 정상적으로 notice를 하든지, 닉네임 중복 오류 메시지를 보내든지 해야 한다.
    // io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
    userIdArr[socket.id] = res.userId;
  });

  //   실습 3-3 : 퇴장 시키기
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
