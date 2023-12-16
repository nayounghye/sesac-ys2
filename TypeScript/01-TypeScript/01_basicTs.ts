let str: string = "hello";
//str = 5 ; -> 에러 발생함!
console.log(str);

let num: number;
num = 5;

let undif: undefined;
let nu: null = null;

// 숫자로 이루어진 배열의 type number[]
let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 문자로 이루어진 배열의 type string[]
let strArr: string[] = ["죠르디", "스카피", "앙몬드"];
// 위와 동일한 코드고 표현 방법만 다른 코드!
let strArr2: Array<string> = ["죠르디", "스카피", "앙몬드"];

// 서로 다른 타입의 배열을 만들고 싶다면?
// | : or 같은 뜻이라 생각하면 된다. number이거나 string이거나~
let numStrArr: (number | string)[] = [1, "죠르디", 2, "스카피"];
// 위와 동일한 코드고 표현 방법만 다른 코드!
let numStrArr2: Array<number | string> = [1, "죠르디", 2, "스카피"];
// 아래같이 쓸 수도 있음!
let abc: number | string = "a";
abc = "2";

// 💥 typescript에서 any를 사용하는 건 지양해야한다. 💥
// any는 모든 자료형을 다 받을 수 있다.
let anyArr: any[] = [1, "죠르디", null, undefined, {}];

// 자료형이 객체인 경우
let obj: object = {
  name: "jordy",
  age: "999",
  gender: "?",
};

//Tuple
let food: [string, number] = ["치킨", 29500];
console.log(food[0]);
food[0] = "피자";
console.log(food[0]);

// food[2]="햄버거" -> 에러 발생!
// Tuple의 한계 위 처럼 할당하는 건 오류로 잡지만 push 메소드를 이용하면 오류를 잡지 않고, 실제로 값이 들어가기까지 한다.
food.push("aaaa");
console.log(food);

// readonly : 읽기만 가능한 datatype!
let food2: readonly [string, number] = ["치킨", 29500];
// food2[0] = "피자"; -> 에러 발생

// Enum
// 열거된 값들 중에 하나를 선택해야할 때 사용한다.
// 죠르디, 앙몬드, 스카피
enum NINIZ {
  jordy,
  angmond,
  scapy,
}
console.log(NINIZ.jordy);

const niniz = 0;

if (niniz == NINIZ.jordy) {
  console.log("죠하!");
}

let aaa: NINIZ = 2;
// let aaaaa: NINIZ = 3; // error

enum NINIZ2 {
  jordy = "죠르디",
  angmond = "앙몬드",
  scapy = "스카피",
}

console.log(NINIZ2.jordy); // 출력: 죠르디
