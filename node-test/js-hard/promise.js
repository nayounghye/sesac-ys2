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

//--------------------------- callback 지옥 예시 ---------------------------

// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     let result = n * 2;
//     cb(result);
//   }, 700);
// }

// function sub(n, cb) {
//   setTimeout(function () {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log('1: ', x);
//   mul(x, function (y) {
//     console.log('2: ', y);
//     sub(y, function (z) {
//       console.log('3: ', z);
//     });
//   });
// });

//--------------------------- callback 지옥 예시를 promise로 바꿔보자! ---------------------------
function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      //   reject('오류 발생'); resolve 주석 처리하고 reject 활성화하면 오류발생 예시 볼 수 있음!
    }, 700);
  });
}

function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then((result) => {
    console.log('1: ', result);
    return mul(result);
  })
  .then((result) => {
    console.log('2: ', result);
    return sub(result);
  })
  .then((result) => {
    console.log('3: ', result);
  })
  .catch((err) => {
    console.log(err);
  });

//--------------------------- (promise) async/await 로 바꿔보자! ---------------------------
async function add(n1, n2) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

async function mul(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
      //   reject('오류 발생'); resolve 주석 처리하고 reject 활성화하면 오류발생 예시 볼 수 있음!
    }, 700);
  });
}

async function sub(n) {
  return new Promise((resolve) => {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
    }, 500);
  });
}
// 1. async 함수는 promise를 return 한다.
// 2. await 키워드는 async 함수 내부에서만 사용이 가능하다.
async function exec() {
  const x = await add(4, 3); // x = 7
  console.log('1: ', x);
  const y = await mul(x); // y = 14
  console.log('2: ', y);
  const z = await sub(y); // z = 13
  console.log('3: ', z);
}

exec();
