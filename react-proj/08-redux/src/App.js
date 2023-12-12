import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Box1 />
    </div>
  );
}
// redux를 안쓰고 컴포넌트만 많이 만들어서 사용한 방법 예시
//  4가지 다 다른 방식으로 사용함.
function Box1() {
  const [number, setNumber] = useState(100);
  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box2 number={number} increase={increase} decrease={decrease} />
    </div>
  );
}
function Box2(props) {
  const { number, increase, decrease } = props;
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box3 number={number} increase={increase} decrease={decrease} />
    </div>
  );
}
function Box3(props) {
  return (
    <div className="box">
      <Box4
        number={props.number}
        increase={props.increase}
        decrease={props.decrease}
      />
    </div>
  );
}
function Box4({ number, increase, decrease }) {
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <button onClick={increase}>PLUS</button>
      <button onClick={decrease}>MINUS</button>
    </div>
  );
}

export default App;
