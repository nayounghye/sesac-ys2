import { useState } from "react";

const BankBox = ({ money, onPlus, onMinus }) => {
  const [input, setInput] = useState("");

  const addNum = () => {
    onPlus(Number(input));
    setInput("");
  };

  const deleteNum = () => {
    onMinus(Number(input));
    setInput("");
  };

  return (
    <div>
      <h2>NINIZ 은행</h2>
      <h3>잔액 : {money}원</h3>
      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button onClick={addNum}>입금</button>
      <button onClick={deleteNum}>출금</button>
    </div>
  );
};

export default BankBox;
