// controller 부분은 function 을 다 여기에 담는다.
const User = require('../model/User');
// User에는 getUser 라는 함수가 존재 'User  = {getUser: ()=>{}}

//  --------------------------------------------------- post ---------------------------------------------------
exports.main = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  const userData = User.getUser(req.body.userid, req.body.password);
  console.log(userData);
  let data;
  if (userData) {
    data = {
      isSuccess: true,
      msg: `${userData.name}님 환영합니다!`,
    };
  } else {
    data = {
      isSuccess: false,
      msg: '아이디 또는 비밀번호를 잘못 입력했습니다.',
    };
  }
  res.send(data);
};
