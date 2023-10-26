const users = [
  {
    id: 'jordy',
    password: '1234',
  },
];

function verifyUser(userid, password) {
  const user = users.find((u) => u.id === userid && u.password === password);
  return user
    ? { isSuccess: true, msg: '로그인 성공!' }
    : { isSuccess: false, msg: '로그인 실패!' };
}

module.exports = {
  verifyUser,
};

// 나의 삽질 -----------------------------
// exports.idPw = () => {
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
// };

// 이 코드를 변경해야함!! ----------------------
// function (req, res) {
//     const id = 'jordy';
//     const pw = '1234';
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
