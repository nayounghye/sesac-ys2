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
// 직사각형
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

// let rec2 = new Rectangle(3, 4);
rec2.getArea();
rec2.getDiagonal();
// console.log(
//   `직사각형 넓이 : ${rec2.getArea()}, 대각선 길이: ${rec2.getDiagonal()}`
// );

// 삼각형
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

// 원
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  //메소드
  getArea() {
    return this.radius ** 2 * 3.14;
  }
}

let rec4 = new Circle(3, 4, 5);
rec4.getArea();
console.log(`원 넓이 : ${rec4.getArea()}`);

//-------------------------- 수업12_실습1-3. 클래스 상속2 --------------------------

// let rec2 = new Rectangle(3, 4);
// console.log(`직사각형 넓이 : ${rec2.getArea()}`);
// let rec3 = new Triangle(3, 4);
// console.log(`삼각형 넓이 : ${rec3.getArea()}`);
// let rec4 = new Circle(3, 4, 5);
// console.log(`원 넓이 : ${rec4.getArea()}`);
