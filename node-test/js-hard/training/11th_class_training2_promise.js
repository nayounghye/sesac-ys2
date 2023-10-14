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

//-------------------------- Promise 를 사용해서 해결해보기! ---------------------------

function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log('back');
    cb('back');
  }, 1008);
}

function hell(cb) {
  setTimeout(function () {
    cb('callback hell');
  }, 1000);
}

call('kim', function (name) {
  console.log(name + '반가워');
  back(function (txt) {
    console.log(txt + '을 실행했구나');
    hell(function (message) {
      console.log('여기는' + message);
    });
  });
});
