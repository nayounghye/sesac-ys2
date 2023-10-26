// controller 부분은 function 을 다 여기에 담는다.
const User = require('../model/User');
// User에는 getUser 라는 함수가 존재 'User  = {getUser: ()=>{}}

//  --------------------------------------------------- post ---------------------------------------------------
exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  // 아래 데이터는 이제 model로 넘어가야한다.. db에서 가져온다고 가정해서 할거임!
  //   const id = 'lily';
  //   const pw = '12345';
  const userData = User.getUser();
  // userDate = {id: "jordy", pw: "1234"}
  let data;
  if (req.body.userid == userData.id && req.body.password == userData.pw) {
    data = {
      isSuccess: true,
      msg: '로그인 성공!',
    };
  } else {
    data = {
      isSuccess: false,
      msg: '로그인 실패!',
    };
  }
  // console.log(req.body);
  res.send(data);
};

// function (req, res) {
//     res.render('index');
//   });

//   function (req, res) {
//     const id = 'lily';
//     const pw = '12345';
//     let data;
//     if (req.body.userid == id && req.body.password == pw) {
//       data = {
//         isSuccess: true,
//         msg: '로그인 성공!',
//       };
//     } else {
//       data = {
//         isSuccess: false,
//         msg: '로그인 실패!',
//       };
//     }
//     // console.log(req.body);
//     res.send(data);
//   });

//  --------------------------------------------------- get ---------------------------------------------------

exports.register = (req, res) => {
  res.send(req.query);
};

// 나의 삽질, 라우터 이름이 register인데, main으로 적어서 'Error: Route.get() requires a callback function but got a [object Undefined]' 라는 오류가 발생
// 해당 오류는 불러오려는 라우터명이 없다는 것으로, 라우터명을 잘 설정했는지 확인하면 된다.
// exports.main = (req, res) => {
//   res.send(req.query);
// };

// function (req, res) {
//     //   console.log(req.query);
//     //   res.send(req.query);
//     // });
