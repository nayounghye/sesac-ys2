// TS generic 실습1
// 제네릭 이용해서 함수 arrElement 선언하기
// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입까지 작성하기
// 실행 예시) console.log(arrElement<string>(["a"], 0));

const arrElement = <T>(arr: T[], index: number): T => {
  return arr[index];
};
console.log(arrElement<string>(["a"], 0));

// TS generic 실습2
// 첫번째 인자로 들어간 배열의 길이보다
// 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!

const arrElement2 = <T>(arr: T[], index: number): T | boolean => {
  if (arr.length <= index) return false;
  return arr[index];
};
console.log(arrElement2<string>(["a"], 1)); // false



