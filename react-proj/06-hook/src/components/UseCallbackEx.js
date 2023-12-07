import { useMemo, useState, useCallback } from "react";

// useCallback : 함수를 기억함.
// 컴포넌트가 랜더링될 때 컴포넌트 내부에 있는 함수도 다시 선언하게 되므로, 다시 선언할 필요가 없는 함수는 다시 선언하지 않는 것이 좋다!
// 재선언하지 않고, 이전에 선언한 함수를 다시 사용하는 것이 더 효율적!! 이걸 가능하게 하는게 useCallback이다.
export default function UseCallbackEx() {
  const [text, setText] = useState("");

  // 함수내부에서 값을 사용하고 있지 않은 그 시점에 함수를 재선언하지 않아도 되는 시점!이라 판단하면 된다.
  // 의존성 배열이 빈값일 경우, 처음 마운트 될 때 선언된 함수를 계속 기억하고 있다가, update될 때 다시 선언하지 않고 기억하고 있는 함수를 사용함.
  // 컴포넌트 내부에서 변경될 수 있는 값은 대표적으로 state, props 등이 있다.
  // handleOnChange 함수에서는 useCallback 컴포넌트에서 유일하게 변경될 수 있는 값인 text를 활용하고 있지 않다! 즉, text를 기억하고 있다가 재사용해도 무방하다!
  const handleOnChange = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h3> usecallback 공부 </h3>
      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
}
