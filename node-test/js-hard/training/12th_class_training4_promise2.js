//-------------------------- callback 함수 예시 ---------------------------

// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(function () {
//       document.body.style.backgroundColor = 'yellow';
//       setTimeout(function () {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(function () {
//           document.body.style.backgroundColor = 'blue';
//         }, 1000);
//       }, 1000);
//     }, 1008);
//   }, 1000);
// }, 1000);

//-------------------------- Promise 를 사용해서 해결해보기! ---------------------------

//  -------------------------- 쌤이 작성하신 코드 (중복되는 부분 변수처리! 배울것!)
// function red() {
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, 1000);
//   });
// }

// async-await 방법으로 작성한 경우
// async function exec() {
//   await changeColor('red');
//   await changeColor('orange');
//   await changeColor('yellow');
//   await changeColor('green');
//   await changeColor('blue');
// }
// exec()

// promise 방법으로 작성한 경우
// changeColor('red')
//   .then(() => {
//     return changeColor('orange');
//   })
//   .then(() => {
//     return changeColor('yellow');
//   })
//   .then(() => {
//     return changeColor('green');
//   })
//   .then(() => {
//     changeColor('blue');
//   });

function red() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'red';
      resolve();
    }, 1000);
  });
}

function orange() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'orange';
      resolve();
    }, 1000);
  });
}

function yellow() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'yellow';
      resolve();
    }, 1000);
  });
}

function green() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'green';
      resolve();
    }, 1000);
  });
}

function blue() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'blue';
      resolve();
    }, 1000);
  });
}

async function exec() {
  await red();
  await orange();
  await yellow();
  await green();
  await blue();
}

exec();
