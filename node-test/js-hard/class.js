const niniz = {
  name: 'jordy',
  age: '??',
  mew: function () {
    console.log('니니');
  },
};

niniz.mew();

const niniz2 = {
  name: 'scapy',
  age: '??',
  mew: function () {
    console.log('니니');
  },
};
const niniz3 = {
  name: 'angmond',
  age: '??',
  mew: function () {
    console.log('니니');
  },
};

//PascalCase 규칙을 이용해서 식별자 생성
//camelCase에서 첫글자를 대문자로 바꾸면 된다.

class Niniz {
  // 생성자 : 메소드의 일종
  // (메소드 중에서) Cat class를 이용해서 객체를 만드는 순간에 호출되는 메소드.
  constructor(name, age) {
    this.name = name; //this.name = name에서 name 두 변수는 각 다른 부분을 가져오고 있음.
    this.age = age;
  }

  // 메소드
  mew() {
    console.log('니니');
  }

  // niniz의 정보를 콘솔로 찍는 메소드
  info() {
    console.log(`이름은 ${this.name}, 나이는 ${this.age}`);
  }
}

// Niniz 클래스를 이용해서 새로운 객체를 만들겠다.
const niniz4 = new Niniz('jordy', '??');
const niniz5 = new Niniz('scapy', '??');
const niniz6 = new Niniz('angmond', '??');
console.log(niniz4.name, niniz5.name);
niniz4.mew();
niniz4.info();
