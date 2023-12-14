// TS 함수 실습1
// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sumsum 만들기
const sumsum = (a: number, b: number): number => {
  return a + b;
};
console.log(sumsum(5, 11));

// TS 함수 실습2
// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sumsumsum
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

const sumsumsum = (...num: number[]): number => {
  return num.reduce((a, b) => a + b, 0);
};
console.log(sumsumsum(1, 2, 3, 4, 10)); // 20
