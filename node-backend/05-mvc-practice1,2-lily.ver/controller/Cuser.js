const User = require('../model/User')
// User = { getUesr: () => {} }

exports.main = (req, res) => {
  res.render('index')
}

exports.login1 = (req, res) => {
  // const id = "lily";
  // const pw = "12345";
  const userData = User.getUser()
  //   userData = {id: "lily", pw: "12345"}
  let data
  if (req.body.userid == userData.id && req.body.password == userData.pw) {
    data = {
      isSuccess: true,
      msg: '로그인 성공!',
    }
  } else {
    data = {
      isSuccess: false,
      msg: '로그인 실패!',
    }
  }

  res.send(data)
}

// 실습.MVC(2)
exports.login2 = (req, res) => {
  const usersData = User.getUsers()

  let data = {
    isSuccess: false,
    msg: '아이디 또는 비밀번호를 잘못 입력했습니다.',
  }
  for (let user of usersData) {
    if (req.body.userid == user.id && req.body.password == user.pw) {
      data = { isSuccess: true, msg: `${user.name}님 환영합니다.` }
      break
    }
  }

  res.send(data)
}
