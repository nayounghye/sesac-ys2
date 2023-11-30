import { useState } from "react";
function StateFunc() {
  // useState 는 배열을 반환한다. -> 그 배열을 구조분해하여 number, setNumber 선언
  // [state 변수, state를 변경시키는 함수] = useState(초기값)
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("hello");
  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number}{" "}
        <button
          onClick={() => {
            // 아래처럼 연달아쓰면 비동기처리기 때문에 2 -> 4 .. 가 되지 않음!
            // setNumber(number + 1);
            // setNumber(number + 1);
            // 아래처럼 콜백함수로 해야 동기처리가 되어 2 -> 4 .. 로 결과값이 나옴!
            setNumber((preNumber) => preNumber + 1);
            setNumber((preNumber) => preNumber + 1);
          }}
        >
          +1 버튼
        </button>
      </div>
    </>
  );
}

export default StateFunc;
