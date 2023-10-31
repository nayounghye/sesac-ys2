exports.getUser = () => {
  const id = 'lily'
  const pw = '12345'
  return { id, pw }
}

// 실습.MVC(2)
let users = `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`

exports.getUsers = () => {
  const userList = users.split('\n')
  let usersInfo = []
  for (let user of userList) {
    const userTemp = user.split('//')
    usersInfo.push({ id: userTemp[0], pw: userTemp[1], name: userTemp[2] })
  }
  return usersInfo
}
