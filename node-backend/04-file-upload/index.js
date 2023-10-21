const express = require('express');
const multer = require("multer"); // multer를 불러오는 코드
const path = require("path"); // Path : 파일 경로를 받았을 때 그 조작(파일명, 확장자 추출 등)을 도와준다.
console.log("확장자 : ", path.extname("hi.png")); // 확장자 추출
console.log("확장자 : ", path.basename("hi.png", path.extname("hi.png"))); // 파일명 추출
const app = express();
const PORT = 8000;


// upload라는 객체 안에는 미들웨어 함수가 존재 . single(), array()
// 미들웨어 : 클라이언트의 요청과 서버의 응답 그 사이에 존재한다. (next())
// 아래 처럼만 입력하면 multer가 업로드된 파일명을 임의의 문자열을 생성해서 그 문자열을 파일명으로 설정해버린다.
// 심지어 확장자도 붙여주지 않는다.
const upload = multer({
    dest: "uploads/", 
});
  
  const uploadDetail = multer({
        // multer.diskStorage 함수 : disk에 저장소를 만들 때 해당 함수를 사용한다.
    storage: multer.diskStorage({
      destination: function (req, file, done) {
        done(null, "uploads/");
      },
      filename: function (req, file, done) {
        console.log(file); // file.originalname : 죠르디.png
        const ext = path.extname(file.originalname); // 출력 : .png
        const basename = path.basename(file.originalname, ext); // 출력 : 죠르디
        // 파일명을 '죠르디_특정숫자.png' 이런 식으로 지정하고 싶다면??
        const fileName = basename + "_" + Date.now() + ext; // 죠르디_특정숫자.png
  
        done(null, fileName);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
  });
  


// multer 총 정리
    // storage : 파일을 저장할 정보를 설정한다. (storage의 객체 : diskStorage, diskStorage의 객체 : dest~,file~)
    // -- diskStorage : 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드다. 
    // ---- destination : 파일이 저장될 경로다.
    // ---- filename : 파일이 저장될 이름이다.

    // limits : 파일 사이즈에 제한을 둔다.
    // -- fileSize : 파일의 최대 크기를 설정한다.

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.render("index")
})

// upload.single("ejs 파일의 input type=file 태그의 name 값")
//single(): 미들웨어이며, 클라이언트가 보낸 요청 중 "userfile"이라는 name의 파일 데이터가 있다면
// 파일을 저장해서 req.file / req.files 이라는 객체를 생성해서 다음 함수에 넘겨준다.
// single() : 파일 하나만 업로드할 때 사용한다. → req.file 생성
app.post("/upload", upload.single("userfile"), function(req, res) {
    console.log("file : ",req.file)
    console.log("body : ", req.body)
    res.send("파일 업로드")
})


app.post("/upload/detail", uploadDetail.single("userfile"), function(req, res) {
    console.log("file detail : ",req.file)
    console.log("body detail : ", req.body)
    res.send("파일 업로드")
})



app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  