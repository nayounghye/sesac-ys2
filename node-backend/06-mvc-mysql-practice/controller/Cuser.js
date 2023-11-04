// controller 부분은 function 을 다 여기에 담는다.
// // User에는 userInfo 라는 함수가 존재 'User  = {userInfo: ()=>{}}
// const User = require('../model/User');

// // 1. router 분리 (요청을 정의) -> routes파일에 정리 - 완료
// // 2. controller 분리 (들어온 요청에 대해 데이터 처리, view를 render 등을 담당, client에 응답하는 역할을 함.)
// // function 부분은 다 controller에 들어간다.

// //  function (req, res) {
// //   res.render('index');
// // });
// // 위 코드를 아래처럼 변경
// exports.main = (req, res) => {
//   res.render('index');
// };

// exports.register = (req, res) => {
//   User.getUsers((rows) => {
//     res.render('register', { data: rows });
//   });
// };

// POST /visitor => 방명록 insert

const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};
exports.post_signup = (req, res) => {
  User.post_signup(req.body, function () {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};
exports.post_signin = (req, res) => {
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

exports.profile = (req, res) => {
  User.get_user(req.body.id, function (result) {
    console.log('profile', result);
    if (result.length > 0) res.render('profile', { data: result[0] });
    else res.redirect('/user/signin');
  });
};

exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
