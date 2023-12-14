// Generic
// 기본적으로 선언할 때 type을 지정을 해주는데,
// 사용하다 보면, 다양한 타입에 대해서 처리를 해줘야 할 수 있음!
// Generic은 호출하거나 사용할 때 type을 넘겨서 해당 type으로 지정할 수 있는 방법이다.

// x,y에 숫자랑 문자 둘다 정의하려면??

// 방법1) 오버 로딩 사용
function printXY(x: number, y: number): void;
function printXY(x: string, y: string): void;

function printXY(x: number | string, y: number | string) {
  console.log(x, y);
}
printXY(1, 2);

// 방법2) or 사용
// function printXY(x: number | string, y: number | string) {
//     console.log(x, y);
//   }
//   printXY(1, 2);

// 방법3) 각각 number, string 함수 따로 선언
// function printXY(x: number, y: number) {
//   console.log(x, y);
// }
// printXY(1, 2);

// function strPrintXY(x: string, y: string) {
//   console.log(x, y);
// }
// printXY("a", "b");

// 방법4) Generic 사용
// 선언할 때 'T'라는 자료형을 쓰겠다는 의미고, 대부분 T로 쓰는게 관례
function printXYByGeneric<T>(x: T, y: T) {
  console.log(x, y);
}
printXYByGeneric<string>("a", "b");
printXYByGeneric<number>(1, 2);

// 배열 안에 숫자와 문자 length를 구하고 싶다면?
function numArrLength(arr: number[]): number {
  return arr.length;
}
// // 위 함수선언식으로 쓴걸 함수 표현식으로 쓰면 아래와 같음. 같은 코드임!
// const numArrLength = (arr: number[]): number => arr.length;

function strArrLength(arr: string[]): number {
  return arr.length;
}
// 만약 객체 배열, 이 외 다른 type의 배열도 length를 구하는 함수를 만들고 싶다면?
function arrLength<T>(arr: T[]): number {
  return arr.length;
}
arrLength<string>(["a", "b"]);

// 다른 종류의 문자형을 쓰는 경우
function exampleGeneric<T, U>(x: T, y: U) {
  console.log(x, y);
}
exampleGeneric<string, number>("a", 1);
let a: string[];
let b: Array<string>;

// interface에서 generic 활용하는 법
interface Phone<T> {
  company: string;
  model: string;
  option: T;
}

interface SamsungOption {
  line: string;
  price: number;
}

const galaxyS23: Phone<SamsungOption> = {
  company: "samsung",
  model: "galaxy S23",
  option: {
    line: "Ultra",
    price: 1000000,
  },
};

interface AppleOption {
  line: string;
  price: number;
}

const iphone15: Phone<AppleOption> = {
  company: "apple",
  model: "iphone 15",
  option: {
    line: "Pro",
    price: 3000000,
  },
};
