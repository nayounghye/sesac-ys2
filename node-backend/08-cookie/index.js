//서버 실행시키는 코드들

const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
