import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/counterReducer";
import { decrease } from "./store/counterReducer";
import { Box1Container } from "./containers/BoxesContainers";

// containers 폴더 : redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더 :  redux store에 직접적으로 접근하지 않고,보통 presentational 컴포넌트만 저장.

function Prac1() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h3>number : {number}</h3>
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>PLUS</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>MINUS</button> */}
      <button onClick={() => dispatch(increase())}>PLUS</button>
      <button onClick={() => dispatch(decrease())}>MINUS</button>
      <div>isData: {`${isData}`}</div>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHANGE</button>
    </div>
  );
}

export default Prac1;
