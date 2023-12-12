import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/counterReducer";
import { decrease } from "./store/counterReducer";

function AppRedux2() {
  return (
    <div>
      <Box1 />
    </div>
  );
}

function Box1() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box2 />
    </div>
  );
}

function Box2() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="box">
      <h3>number : {number}</h3>
      <Box3 />
    </div>
  );
}

function Box3() {
  return (
    <div className="box">
      <Box4 />
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

export default AppRedux2;
