const express = require('express');
const multer = require('multer'); // multer를 불러오는 코드
const path = require('path'); // Path : 파일 경로를 받았을 때 그 조작(파일명, 확장자 추출 등)을 도와준다.
const app = express();
const PORT = 8000;

// 클라이언트가 uploads 폴더에 저장된 이미지파일에 접근할 수 있도록, 미들웨어를 작성한다.
app.use('/uploads', express.static(__dirname + '/uploads'));

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
