let str: string = "hello";
//str = 5 ; -> 에러발생함!
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

let obj: object;
