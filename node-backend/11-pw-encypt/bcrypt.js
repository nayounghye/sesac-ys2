const bcrypt = require('bcrypt');

const salt = 10;

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}
console.log(bcryptPw('1234'));
