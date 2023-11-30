import { useState } from "react";
function Prac1_2() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  function increase() {
    setNumber1((prevNumber1) => prevNumber1 + 1);
  }
  function decrease() {
    setNumber2((prevNumber2) => prevNumber2 - 2);
  }

  return (
    <>
      <h1>State (함수형 컴포넌트)</h1>
      <div>
        <h2>
          {number1} <button onClick={increase}>+1</button>
        </h2>
        <h2>
          {number2} <button onClick={decrease}>-2</button>
        </h2>
      </div>
    </>
  );
}
export default Prac1_2;
