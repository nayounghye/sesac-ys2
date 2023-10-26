const { userModel } = require('../model/User');

exports.getRegister = (req, res) => {
  console.log(req.query);
  res.send(req.query);
};

exports.postLogin = (req, res) => {
  const result = userModel.verifyUser(req, body.userid, req.body.password);
  res.send(result);
};

exports.getIndex = (req, res) => {
  res.render('index');
};

// ------------------ 나의 삽질 -------------------
// exports.main = (req, res) => {
//   const id = 'jordy';
//   const pw = '1234';
//   let data;
//   if (req.body.userid == id && req.body.password == pw) {
//     data = {
//       isSuccess: true,
//       msg: '로그인 성공!',
//     };
//   } else {
//     data = {
//       isSuccess: false,
//       msg: '로그인 실패!',
//     };
//   }
//   // console.log(req.body);
//   res.send(data);
// };

// exports.index = (req, res) => {
//   const commentData = commentInfos();
//   res.render('guest', {
//     commentInfos: commentData,
//   });
// };

// // --------------------------------------- ejs에 있는 함수
// function clickLogin() {
//   const form = document.forms['login'];
//   const data = {
//     userid: form.userid.value,
//     password: form.password.value,
//   };

//   // console.log(data); // 1차적으로 데이터 잘 만들어졌는지 확인

//   axios({
//     method: 'POST',
//     url: '/login',
//     data: data,
//   }).then((res) => {
//     // { isSuccess: ??, msg : ?? }
//     const { isSuccess, msg } = res.data;
//     console.log(isSuccess); // 2. 응답 잘 오는지 확인
//     const element = document.querySelector('.login-result');
//     element.innerHTML = msg;

//     const color = isSuccess ? 'blue' : 'red';
//     element.style.color = color;
//   });
// }
