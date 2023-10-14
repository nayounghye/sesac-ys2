// promise 기본 예시
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise 상태는 fufilled!! then으로 연결됩니다. \n 이 때의 flag가 true입니다.`
      );
    } else {
      reject(
        `promise 상태는 rejedcted!! catch으로 연결됩니다. \n 이 때의 flag가 false입니다.`
      );
    }
  });
}

// 특정 함수가 return 하는 값이 promise 객체일 경우,
// chaning 메소드 기법으로 then, catch라는 메소드를 사용할 수 있다.
promise1(true)
  .then((result) => {
    // result에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는 'promise 상태는 fufilled!! then으로 연결됩니다. \n 이 때의 flag가 true입니다.' 내용이 들어감.
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

promise1(false)
  .then((result) => {
    // result에는 resolve로 보낸 인자 값이 들어오게 된다.
    // 여기서는 'promise 상태는 fufilled!! then으로 연결됩니다. \n 이 때의 flag가 true입니다.' 내용이 들어감.
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}
