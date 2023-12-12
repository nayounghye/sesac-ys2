import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./store/counterReducer";
import { decrease } from "./store/counterReducer";

function BankBox() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1>NINIZ 은행</h1>
      <h2>잔액 : {number}</h2>
      <input type="number" onChange={() => {}}></input>
      <button onClick={() => dispatch(increase())}>입금</button>
      <button onClick={() => dispatch(decrease())}>출금</button>
      <button onClick={() => dispatch({ type: "CHANGE", payload: { number } })}>
        CHANGE
      </button>
    </div>
  );
}

export default BankBox;
