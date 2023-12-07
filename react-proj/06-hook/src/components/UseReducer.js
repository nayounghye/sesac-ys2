import { useReducer, useState, useCallback } from "react";

const initialValue = { value: 0 };
const reducer = (prevState, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: prevState.value + 1 };
    case "MINUS":
      return { value: prevState.value - 1 };
    case "RESET":
      return initialValue;
    case "MUlTIPLY":
      return { value: prevState.value * action.number };
    default:
      return { value: prevState.value };
  }
};

// state : 상태
// dispatch : action을 발생시키는 함수
// reducer : 실질적으로 상태를 업데이트 하는 함수 (결국 dispatch가 실행시키는 함수는 reducer가 된다.)

export default function UseReducer() {
  const handleChangeNumber = useCallback((e) => setNumber(e.target.value), []);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [number, setNumber] = useState(0);

  const plus = () => dispatch({ type: "PLUS" });
  const minus = () => dispatch({ type: "MINUS" });
  const reset = () => dispatch({ type: "RESET" });
  const multiply = () => dispatch({ type: "MUlTIPLY", number: number });
  const divide = () => dispatch({ type: "DIVIDE", number: number });

  // 컴포넌트 자체가 복잡해져서 코드 자체가 길어졌을 때...
  // state의 변화를 추적하고 싶은데 어떻게 해야할까? setState를 일일이 찾아가면서 봐야한다. 매우 비효율적!
  // reducer를 사용하면 reducer함수 하나만 확인해도 state가 어떻게 변하는지 한눈에 볼 수 있다. 매우 효율적!
  //   const [state, setState] = useState(initialValue);
  //   const plus = () => setState({ value: state.value + 1 });
  //   const minus = () => setState({ value: state.value - 1 });
  //   const reset = () => setState(initialValue);
  //   const multiply = () => setState({ value: state.value * 1 });

  return (
    <>
      <h3>UseReducer 공부</h3>
      <div>
        {state.value}
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>reset</button>
        <input type="number" value={number} onClick={handleChangeNumber} />
        <button onClick={multiply}>곱하기</button>
      </div>
    </>
  );
}
