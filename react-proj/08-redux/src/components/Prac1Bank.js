import { BankBox } from "../containers/Prac1Containers";

export function BankBox(props) {
  const { number, isData, counterPlus, counterMinus } = props;
  return (
    <div className="box">
      <h2>NINIZ 은행</h2>
      <h3>잔액 : {`${isData}`}</h3>
      <input type="number" onChange={handleInputChange} value={amount}></input>
      <button onClick={counterPlus}>입금</button>
      <button onClick={counterMinus}>출금</button>
    </div>
  );
}
