import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "./store/PracReducer";
import { useState } from "react";

export function BankBox() {
  const money = useSelector((state) => state.counter.money);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0); // 사용자가 입금할 금액
  const counterPlus = () => dispatch(plus());
  const counterMinus = () => dispatch(minus());
  // const isDataChange = () => dispatch({type: "CHANGE"})

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
    <BankBox
      money={money}
      isData={isData}
      counterPlus={counterPlus}
      counterMinus={counterMinus}
    />
  );
}
