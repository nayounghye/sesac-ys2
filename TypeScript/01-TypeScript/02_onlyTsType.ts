// 특정 옵션값에 타입을 주는 방법 or 의미
type gender = "Men" | "Women";
const NARAKA: gender = "Women";

// 많이 쓰일 것 같은 tuple은 미리 type으로 정의해둘 수 있다.
// [상품명, 가격]
type productInfo = [string, number];
const cola: productInfo = ["cola", 2500];

// 객체에 대한 type을 지정할 경우 (이름을 대문자로 지정하는 것이 관례)
// 대체로 객체는 'interface'를 사용하지만 'type'도 사용 가능
interface ProductInfo2 {
  productName: string;
  price: number;
}

const cider: ProductInfo2 = { productName: "cider", price: 2500 };
// 미리 지정한 값이 아닌 걸 넣으면 아래와 같이 오류가 발생
// const cider: ProductInfo2 = { productName: "cider", price: 2500, sale: 10 };

// 그럼 만약 미리 지정한 값이 아닌걸 넣고싶으면 어떻게 해야할까?
// ? 를 붙여서 적어도 되고 안적어도 되는(optional) 자료형을 만들어준다.

interface ProductInfo3 {
  productName: string;
  price: number;
  sale?: number; // undefined와 같은 의미라 생각하면 된다. sale이 있거나 없거나 라는 의미
}

const juice: ProductInfo3 = { productName: "juice", price: 3000, sale: 10 };

// 만약 sale 이 객체 자료형이라면?(객체 안에 객체가 있는 경우)
interface Seller {
  name: string;
}
interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
}
// 복잡한 자료형들을 위같이 잘 정의해두어야 나중에 Typescript 사용할 때 오류 발생이 적다.

const beer: ProductInfo4 = {
  productName: "beer",
  price: 2500,
  seller: { name: NARAKA },
};

console.log(beer.seller.name); // 오류발생
// beer.seller -> seller는 optional한 key로 지정했기 때문에 값이 undefined도 될 수 있기 때문에 오류 발생
// 그럼 해결하려면?  옵셔널 체이닝을 사용하면 된다.
console.log(beer.seller?.name); // 출력: undefined

// 위 내용들이 중요한 이유
// TypeScript를 이용해 React를 사용하려고 하면, 자료형을 정의하는 과정이 중요하기 때문!

// interface 상속 (extends)
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentID: string;
  //   함수의 자료형을 정의하는 방법 : 함수가 어떻게 생겼는지 알려줘야한다.
  eat: () => void; // 매개변수도 없고, return값도 없는 함수구나~ 하고 파악할 것
}

const person: Person = { name: "NARAKA", age: 32 };
const stu: Student = {
  name: "KKANGGOON",
  age: 29,
  studentID: "2014102988",
  eat: () => console.log("밥을 먹는다"),
};
