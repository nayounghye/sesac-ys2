let users = `angmond//12341234//앙몬드
scapy//43214321//스카피
jordy//12345678//죠르디`;

exports.getUser = (userid, userpw) => {
  const userArray = users.split('\n').map((user) => {
    const [id, pw, name] = user.split('//');
    return { id, pw, name };
  });

  return userArray.find((user) => user.id === userid && user.pw === userpw);
};
// 나의 삽질2 -----------------------------
// const users = [
//   {
//     id: 'jordy',
//     password: '1234',
//   },
// ];

// function verifyUser(userid, password) {
//   const user = users.find((u) => u.id === userid && u.password === password);
//   return user
//     ? { isSuccess: true, msg: '로그인 성공!' }
//     : { isSuccess: false, msg: '로그인 실패!' };
// }

// module.exports = {
//   verifyUser,
// };

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
