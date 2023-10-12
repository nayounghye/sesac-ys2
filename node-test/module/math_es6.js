const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;

// 1) 하나만 내보낼 경우

//  es6문법으로 작성한 경우
// export default add;

//  commonJS 문법으로 작성한 경우
// module.exports = add

//2) 여러개 내보낼 경우

//  아래는 commonJS 문법으로 작성한 경우
// module.export = {
//   add,
//   minus,
// };

//  아래는 es6문법으로 작성한 경우
// export default PI; // 여기 default값을 주어줘야 index_es6.js에서 구조분해 없이 식별자를 받아올 때 불러와짐!
export { add, minus };
