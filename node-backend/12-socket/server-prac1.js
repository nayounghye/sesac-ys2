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
const { resourceUsage } = require("process");
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

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  socket.on("hello", (res) => {
    console.log(res);
    socket.emit("resHello", { msg: "안녕하세요!" });
  });
  socket.on("study", (res) => {
    console.log(res);
    socket.emit("resStudy", { msg: "공부하세요!" });
  });
  socket.on("bye", (res) => {
    console.log(res);
    socket.emit("resBye", { msg: "안녕히가세요!" });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
