//----- case3 : 파일에서 여러 개의 식별자를 내보내는 경우 : 여러 개로 하는 경우 객체 형태로 내보내야 한다.
// 특정 식별자(add, minus, PI)만 필요한 경우, 모듈을 받아올 때 객체구조분해 해서 받음
// 왜 이렇게 하느냐? 컴퓨터 메모리를 잡아먹기 때문에 효율적으로 사용하기 위함!
const { add } = require('./math.js');
const sum = add(2, 3);
console.log(sum);
console.log(PI); // 위에서 add만 가져왔으므로 PI값은 안나옴!

//----- case2 : 파일에서 여러 개의 식별자를 내보내는 경우 : 여러 개로 하는 경우 객체 형태로 내보내야 한다.
// 모듈을 받아올 때 객체를 그대로 math라는 식별자로 받음.
// const math = require('./math.js');
// const sum = math.add(3, 5);
// console.log(sum);
// console.log(math.PI);

//----- case1 : 파일에서 한개의 식별자만 내보내는 경우
// const add = require("./math.js")
// const sum = add(2, 3);
// console.log(sum);
