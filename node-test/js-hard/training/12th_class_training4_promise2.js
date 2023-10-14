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

// var color = function() {
//     var colorcg = document.body.style.backgroundColor();
// }
// console

// let bgc () {
//     document.body.style.backgroundColor
// }

function red() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'red';
      resolve(result);
    }, 1000);
  });
}

function orange() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'orange';
      resolve(result);
    }, 1000);
  });
}

function yellow() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'yellow';
      resolve(result);
    }, 1000);
  });
}

function green() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'green';
      resolve(result);
    }, 1000);
  });
}

function blue() {
  return new Promise((resolve) => {
    setTimeout(function () {
      document.body.style.backgroundColor = 'blue';
      resolve(result);
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
