class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 메소드
  age() {
    console.log(
      `${this.name}은(는) ${new Date().getFullYear() - this.year}년 되었어요!`
    );
  }
}

const house1 = new House('종암동 레미안', 1862);
house1.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // 부모(House)의 생성자를 호출
    super(name, year);
    this.floor = floor;
  }

  //   오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것을 말한다.
  //    cf) 오버로딩 : 똑같은 함수의 이름으로 여러 개의 함수를 선언하는 것을 말한다. 매개변수가 다름! 즉, 이름만 같은 다른 함수들을 생성하는 것! 함수JS에서 오버로딩이 없음!
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`);
  }
}
// // 오버로딩 예시
// function overloading(a, b) {
//   console.log(`a: ${a}, b: ${b}`);
// }
// function overloading(a, b, c) {
//   console.log(`a: ${a}, b: ${b}, c: ${c} `);
// }
// overloading(1, 3); // a: 1, b: 3, c: undefined 로 출력 즉, 두 함수 중에 나중에 쓴 함수에 입력됨.

// 해결하고 싶다면? 조금의 기술을 쓰셔서 하나의 함수로 조건에 따라서 잘 실행되도록 하는 함수 생성
// function test(a, b = 0, c = 0) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}`);
//   return a + b + c;
// }

const apart = new Apartment('종암동 레미안', 1862, 25);
console.log(apart.name, apart.floor);

apart.age(
  `${this.name}은(는) ${new Date().getFullYear() - this.year}년 되었어요!`
);
