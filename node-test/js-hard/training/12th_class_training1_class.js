//-------------------------- 수업12_실습1-1. 클래스 생성 --------------------------
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //메소드
  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

//-------------------------- 수업12_실습1-2. 클래스 상속1 --------------------------
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  //메소드
  getArea() {
    return this.width * this.height;
  }
  getDiagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
}

let rec2 = new Rectangle(3, 4);
rec2.getArea();
rec2.getDiagonal();
console.log(
  `직사각형 넓이 : ${rec2.getArea()}, 대각선 길이: ${rec2.getDiagonal()}`
);

class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //메소드
  getArea() {
    return this.width * this.height;
  }
}
let rec3 = new Triangle(3, 4);
console.log(`삼각형 넓이 : ${rec3.getArea()}`);

// 원 너비 구하기 부터 하면 된다!
class Circle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  //메소드
  getArea() {
    return this.width * this.height;
  }
}

//-------------------------- 수업12_실습1-3. 클래스 상속 --------------------------
