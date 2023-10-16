const fruits = ['apple', 'banana', 'grape'];

const [apple2, banana2, grape2] = fruits;
console.log(apple2);
// 아래 코드는 위 코드와 동일한 작업을 하고 있다.
// var apple2 = fruits[0]
// var banana2 = fruits[1]
// var grape2 = fruits[2]

const obj = {
  name: 'Jordy',
  gender: '?',
  color: 'mint',
};
const { color, name } = obj;
console.log(color);

// 아래 코드는 위 코드와 동일한 작업을 하고 있다.
// const gender = obj.gender;
// const name = obj.name;

// 변수의 값을 선언함과 동시에 새로 할당하는 방법
// const { color, name, test = 'input test' } = obj;
// console.log(color, test);

// key 이름을 바꾸는 방법
// const { gender, color: yellow } = obj;
// console.log(gender, color);

let x = 1;
y = 3;
// x  = 3, y = 1 로 바꾸고 싶다면??
[x, y] = [y, x]; // 일캐 간단하게 변경 하면된다!

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const hello = [...'hello'];
console.log(hello);

//------------------ 수업11_실습1_Spread 연산자 사용하기 ------------------
const word1 = 'abc';
const word2 = 'xyz';

const word3 = [...word1, ...word2];
console.log(word3);
//------------------ 실습 끝 ------------------

const obj2 = {
  name: 'Jordy',
  gender: '?',
  color: 'mint',
};

const obj3 = {
  ...obj2,
  age: '?',
};
console.log(obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
  console.log('a', a); // 10 출력
  // rest 파라미터 : 호출하는 함수의 인자 순서에 맞춰 값을 설정한 후 앞에 출력된 값을 제외하고 남은 값을 배열로 설정한다.
  console.log('rest', rest); // [20, 30] 출력
}

get(...values);
