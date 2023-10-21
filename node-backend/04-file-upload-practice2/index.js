const express = require('express');
const multer = require('multer'); // multer를 불러오는 코드
const path = require('path'); // Path : 파일 경로를 받았을 때 그 조작(파일명, 확장자 추출 등)을 도와준다.
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// localhost:8000 url 접속에 대한 응답을 위해 만든 코드
app.get('/', function (req, res) {
  res.render('index');
});

// 클라이언트가 uploads 폴더에 저장된 이미지파일에 접근할 수 있도록, 미들웨어를 작성한다.
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads');
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname);
      const fileName = req.body.userid + '_' + Date.now() + ext;
      done(null, fileName);
    },
  }),
});

app.post(
  '/uploads/dynamic',
  uploadDetail.single('userfile'),
  function (req, res) {
    console.log('file detail : ', req.file);
    console.log('body detail : ', req.body);
    res.send({
      src: req.file.path,
      id: req.body.userid,
      pw: req.body.userpw,
      name: req.body.username,
      age: req.body.userage,
    });
  }
);

// --------- 동적 폼 전송(axios)를 이용한 파일 업로드
app.post(
  '/uploads/dynamic',
  uploadDetail.single('userfile'),
  function (req, res) {
    res.send({
      src: req.file.path,
      id: req.body.userid,
      pw: req.body.userpw,
      name: req.body.username,
      age: req.body.userage,
    });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
