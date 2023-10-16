const express = require('express');
// express 모듈을 import하는 코드

const app = express(); // 함수를 이용해서 server 객체를 만든다.
const PORT = 8000; // 포트 번호를 8000번으로 설정한다.
// 포트 번호 1 ~ 65536까지 존재, 1 ~ 1024번까지는 사전에 기능이 정해져 있다.
// 보통 사용하는 포트 번호는 3000번대, 8000번대 ,8010, 3010, 3001 등 이다.
// 단, 3306은 mySQL에서 사용하므로, 3306은 피해서 사용할 것.

// app 객체의 view engine 설정을 ejs로 변경하는 명령어
app.set('view engine', 'ejs');

// app.use('/static', express.static(__dirname + '/static'));
//__dirname : ~~/01-express/static에 클라이언트가 /static 이름의 주소로 들어올 수 있다.

app.use('/public', express.static(__dirname + '/static'));
//__dirname : ~~/01-express/static에 클라이언트가 /public 이름의 주소로 들어올 수 있다.

// app 객체의 view 폴더를 설정 (기본값: ./views)
app.set('views', './views');
// app 객체의 view 폴더명을 view로 바꾸고 싶다면 아래와 같이 입력
// app.set('views', './view');

// get 메소드(http 메소드) : 클라이언트가 요청할 수 있는 방법들을 정의한다. (http메소드 중에 get메소드가 있다.)
// localhost:8000/ 을 입력해서 인터넷 접속이 가능하게 만들어주는 명렁어이다.
app.get('/', function (req, res) {
  res.send('Hello Jordy'); // 응답 객체 내의 send 메소드를 실행하는 명령어. send 메소드 :  값을 보낸다.
});
// http 메소드의 두번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫번째 매개변수 : request 객체 (요청)
// 두번째 매개변수 : response 객체 (응답)

// 서버 객체를 이용해서 실제로 사용자들이 접속할 수 있도록 서버를 열어주는 메소드 : listen (포트번호, 콜백함수)
//서버를 연다 -> localhost:8000 or 127.0.0.1:8000으로 인터넷 접속이 가능해짐 (127.0.0.1 : 본인 컴퓨터를 가리키는 ip주소)
app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});

// -----Quiz 'localhost:8000/test' 라는 링크로 접속할 수 있도록 추가하려면?
app.get('/test', function (req, res) {
  //   res.send('<div style="color : green">Hello Jordy test</div>');
  // _dirname : 현재 절대 경로
  res.sendFile(__dirname + '/index.html');
});

app.get('/ejs', function (req, res) {
  // render 메소드의 기본 dir(디렉토리) : "./views/"
  //   res.render('index'); //views 폴더 안에 있는 index.ejs 파일을 불러오는 경우
  res.render('test/index'); //views 폴더>test폴더 안에 있는 index.ejs 파일을 불러오는 경우
});

app.get('/naraka', function (req, res) {
  res.render('naraka', {
    name: 'naraka',
    product: ['운동화', '후드집업', '스웨터', '티셔츠'],
  });
});
