//-------------------------- callback 함수 예시 ---------------------------

// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log('back');
//     cb('back');
//   }, 1008);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb('callback hell');
//   }, 1000);
// }

// call('kim', function (name) {
//   console.log(name + '반가워');
//   back(function (txt) {
//     console.log(txt + '을 실행했구나');
//     hell(function (message) {
//       console.log('여기는' + message);
//     });
//   });
// });

//-------------------------- 수업12_실습2 Promise 를 사용해서 해결해보기! ---------------------------

// function call(name) {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         console.log(name);
//         resolve(name);
//       }, 1000);
//     });
//   }

//   function back() {
//     return new Promise(function (resolve) {
//       setTimeout(function () {
//         console.log('back');
//         resolve('back');
//       }, 1008);
//     });
//   }

//   function hell() {
//     return new Promise(function (resolve) {
//       setTimeout(function () {});
//       resolve('hell');
//     }, 1000);
//   }

//   call('kim')
//     .then((result) => {
//       console.log(result, '반가워');
//       return back(result);
//     })
//     .then((result) => {
//       console.log(result, '을 실행했구나');
//       return hell(result);
//     })
//     .then((result) => {
//       console.log('여기는 callback', result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//-------------------------- 수업12_실습3 Promise(async/await) 를 사용해서 해결해보기! ---------------------------

async function call(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

async function back() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('back');
      resolve('back');
    }, 1008);
  });
}

async function hell() {
  return new Promise(function (resolve) {
    setTimeout(function () {});
    resolve('hell');
  }, 1000);
}

async function exec() {
  // call의 reslove 인자로 넘겨준 값이 A에 담기게 된다. / A = "kim"
  const A = await call('kim');
  console.log(A, '반가워');
  // B = "back"
  const B = await back(A);
  console.log(B, '을 실행했구나');
  // C = "callback"
  const C = await hell(B);
  console.log('여기는 callback', C);
}

exec();
