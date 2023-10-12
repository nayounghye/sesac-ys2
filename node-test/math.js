//----- case2, 3
//파일에서 여러 식별자를 객체 형태로 내보내는 경우
// 아래 case2, 3과 달리 한 줄에 내보낸다는 코드까지 한번에 쓸 수 있음!
//module.exports.add = (a, b) => a + b;
//module.exports.minus = (a, b) => a - b;
//module.exports.PI = 3.14;

//----- case2, 3
//파일에서 여러 식별자를 객체 형태로 내보내는 경우
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const PI = 3.14;
// module.exports = {
//   add,
//   minus,
//   PI,
// };
// = {add키 : add값, minus키 : minus값, PT키 : PT값} 라는 뜻 name : jordy 같이 생각하면됨.

{
}
//----- case1 파일에서 한개의 식별자만 내보내는 경우
// module.exports = add;

// const add = (a.b)=> a+b;
// 위 코드랑 아래 코드는 동일한 코드이다. 단순히 리턴값만 반환하는 거면 위처럼 줄여서 쓸 수 있음.
// const add2 = (a,b) => {
//     return a + b;
// }
