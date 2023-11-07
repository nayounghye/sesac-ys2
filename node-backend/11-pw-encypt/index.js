const crypto = require('crypto');

function createHashedPw(pw) {
  return crypto.createHash('sha512').update(pw).digest('base64');
}
console.log('pw 1234 : ', createHashedPw('1234'));
console.log('pw 1235 : ', createHashedPw('1235'));

// 암호화된 비밀번호를 비교하는 방법
const input = '1234';
const dbPw =
  '1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==';
console.log('compare result : ', createHashedPw(input) == dbPw); // 출력 : compare result :  true

// 위 방법은 같은 비밀번호를 쓰는 사용자 중 한사람만 비밀번호가 유출되어도, 같은 비번을 사용하는 사람 모두 뚫린다는 단점이 있다.
// 이런 사항을 보완하기 위해 똑같은 비번이여도 각 비번마다 소금(salt)을 친다. 솔트는 랜덤값이라 생각하면 된다.

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString('base64');
  console.log('salt: ', salt); // salt값도 DB에 저장해줘야 한다. 같은 비번인지 확인하기 위함.
  const iteration = 100;
  const keylen = 64;
  const digest = 'sha512';
  return crypto
    .pbkdf2Sync(pw, salt, iteration, keylen, digest)
    .toString('base64');
  // 암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

console.log('pw 1234 with salt : ', createHashedPwWithSalt('1234'));

const dbPwSalt =
  'brPVuOy39Ck7Rhrk4CN63qKPTfxoTwVT/i4gdPr0QiBkMpksFd84qe/gW/DFi8B/fh0wur/JQV5eIUoX3hr2uw==';
console.log('compare result : ', createHashedPwWithSalt(input) == dbPwSalt); // 출력 : compare result :  false
// 왜 false 일까? 함수를 불러올 때마다 랜덤하게 salt값을 주기 때문에 다르다. 그러므로, 그 순간 랜덤하게 붙여진 salt값을 db에 저장해버려야
// 나중에 사용자가 로그인할 때 같은 비밀번호인지 확인할 수 있다.

function comparePw(pw, salt) {
  // salt값도 DB에 저장해줘야 한다. 같은 비번인지 확인하기 위함.
  const iterations = 100;
  const keylen = 64;
  const digest = 'sha512';
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString('base64');
}
const dbSalt = 'rPVu98YnEWfVSSWA3Ql+Sw==';
console.log('compare result with salt: ', comparePw(input, dbSalt) == dbPwSalt); // 출력 : compare result :  true

// console.log('pw 1234 with salt: ', createHashedPwWithSalt('1234'));
