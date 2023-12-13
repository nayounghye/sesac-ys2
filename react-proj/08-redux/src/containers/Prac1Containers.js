import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "../store/Prac1Reducer";
import BankBox from "../components/Prac1Bank";

export const BankContainer = () => {
  const money = useSelector((state) => state.bank);
  const dispatch = useDispatch();

  return (
    <>
      <BankBox
        money={money}
        onPlus={(payload) => dispatch({ ...plus(), payload: payload })}
        onMinus={(payload) => dispatch({ ...minus(), payload: payload })}
      />
    </>
  );
};
