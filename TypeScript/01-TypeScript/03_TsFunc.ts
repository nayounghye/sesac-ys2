// JS에서의 함수
// function fun () {
// }

// TS에서의 함수 선언 (아래처럼 하면 자료형을 정의안해서 오류가 발생)
// function sum(a, b) {
//   return a + b;
// }

// TS에서는 매개변수에 자료형을 지정해줘야한다.
// 함수 자체의 Type -> 함수가 실행되어 결국 return 값
function sum(a: number, b: number): number {
  // 마지막 ':number'는 리턴값의 자료형을 지정한 것!
  return a + b;
  //   return "가나다라마"; -> 숫자가 아니므로 오류 발생
}
console.log(sum(1, 5));

// optional 매개변수
// b를 optional하게 하면 if를 사용해서 b값이 있을 때 작동하라고 지정해야 오류가 안남.
const sum1 = (a: number, b?: number): number => {
  if (b) return a + b;
  return a;
};

// void 함수 자체의 return 값이 없을 때 사용
const hello = (): void => {
  console.log("hello");
};

interface Calculator {
  sum: (a: number, b: number) => number;
  sub?: () => void;
}
const calc: Calculator = {
  sum: sum,
};

function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// JS, TS의 차이
// 오버로딩 : 함수의 이름이 같으나, 형태(매개변수, 반환값 등)가 다른 함수를 말한다.
// JS에서는 오버로딩될 때 함수이름 이 같은 함수 중 아래에 선언된 함수가 덮어쓰기되어 작동한다.
// TS에서는 함수의 오버로딩을 할 수 있게됨.
function hihi(numb: number, numb2: number): void;
function hihi(str: string, str2: string): string;

function hihi(param: any, param2: any) {
  console.log(param);
  console.log(param2);
  return param;
}

hihi(1, 2);
hihi("hi", "world");
