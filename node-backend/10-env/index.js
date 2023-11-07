const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const dotenv = require('dotenv');
// cross-env : 배포버전이냐, 개발버전이냐에 따라 다른 env파일을 로드할 수 있게끔 도와주는 모듈이다.

console.log(process.env);
// dotenv.config();
dotenv.config({ path: path.join(__dirname, './config/envs/.env') }); // index.js파일과 같은 위치에 있는.env 파일을 불러와서 환경변수로 사용할 수 있게 한다.
dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});

console.log(process.env.PORT);
console.log('password: ', process.env.PASSWORD);

app.get('/', (req, res) => {
  res.send('Hello Jordy');
});

app.listen(process.env.PORT, function () {
  console.log(`Sever Open: ${process.env.PORT}`);
});
