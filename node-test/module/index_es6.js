// 1) 하나만 내보내는 경우

// 하나만 불러올 때는 'add'의 이름을 바꿔된다.
import add2 from './math_es6.js';
// // math_es6파일에서 default로 export 하고 있는 add2라는 식별자로 받아옴.
console.log(add2(2, 3));

//2) 여러개 내보내는 경우

import { add } from './math_es6.js';
console.log(add(2, 3));

// es6 문법에서 모듈 import할 때, 구조분해 없이 식별자를 만들어서 받아오는 방법은
// module 파일(math_es6.js)에서 default로 export 하는 값이 있어야 불러와짐.
import math from './math_es6.js';
console.log(math.add(2, 3)); // 이 코드는 오류가 발생함. module 파일에 default값이 없기 때문!!
