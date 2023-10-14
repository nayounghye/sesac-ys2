// --------------------------- 문제 발생 코드 ---------------------------
// 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민하니니. ');
// }

// let product;
// let price;

// function pickDrink() {
//   setTimeout(function () {
//     console.log('고민 끝이다 니니!!');
//     product = '제로 콜라';
//     price = 2000;
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink();
// pay(product,price)

//-------------------------- callback 함수를 사용해서 해결해보기! ---------------------------

// 편의점에 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//   console.log('마트에 가서 어떤 음료를 살지 고민하니니. ');
// }

// let product;
// let price;

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log('고민 끝이다 니니!!');
//     product = '제로 콜라';
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// goMart();
// pickDrink(pay);

//--------------------------- Promise 를 사용해서 해결해보기! ---------------------------
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민하니니. ');
}

let product;
let price;

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝이다 니니!!');
      product = '제로 콜라';
      price = 2000;
      resolve(true);
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink().then(() => {
  pay(product, price);
});

//--------------------------- (promise) async/await를 사용해서 해결해보기! ---------------------------
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민하니니. ');
}

let product;
let price;

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝이다 니니!!');
      product = '제로 콜라';
      price = 2000;
      resolve(true);
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

goMart();
pickDrink().then(() => {
  pay(product, price);
});

async function exec() {
  goMart();
  await pickDrink();
  pay(product, price);
}

exec();
