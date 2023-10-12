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
// const age = obj.age;
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

//실습
const word1 = 'abc';
const word2 = 'xyz';

const word3 = [...word1, ...word2];
console.log(word3);
