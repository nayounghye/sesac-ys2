import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./store/PracReducer";
import { useState } from "react";

function BankBox() {
  const money = useSelector((state) => state.counter.money);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0); // 사용자가 입금할 금액

  // 사용자가 입력한 값을 상태에 반영
  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  // 입금
  const handlePlus = () => {
    dispatch(plus(Number(amount)));
  };

  // 출금
  const handleMinus = () => {
    dispatch(minus(Number(amount)));
  };

  return (
    <div className="bankbox">
      <h1>NINIZ 은행</h1>
      <h2>잔액 : {money}</h2>
      <input type="number" onChange={handleInputChange} value={amount}></input>
      <button onClick={handlePlus}>입금</button>
      <button onClick={handleMinus}>출금</button>
    </div>
  );
}

export default BankBox;
