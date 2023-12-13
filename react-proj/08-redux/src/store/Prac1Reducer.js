// counter를 붙인 이유는 다른 reducer와 헷갈리지 말라고 표시한것!
const PLUS = "counter/PLUS";
const MINUS = "counter/MINUS";

// 발생할 수 있는 action을 return 하는 함수이다.
// 필요성 : action type의 이름이 바뀐다고 가정하면 action 을 발생시키는 모든 곳(dispatch를 사용한 모든 곳)에서
// action.type을 하나하나 찾아헤매면서 다 변경해줘야 하므로, 이런 번거로움을 해결하기 위해 사용한다.
export const plus = (amount) => ({ type: PLUS, payload: amount });
export const minus = (amount) => ({ type: MINUS, payload: amount });

const initialValue = { money: 0 };
// state : {number : 100}
const Prac1Reducer = (state = initialValue, action) => {
  switch (action.type) {
    // 액션이 "PLUS"이거나, PLUS 만났을 때 리턴값을 보낸다.
    case "PLUS": // PLUS 상수 선언 전 버전 3
    case PLUS: // PLUS 상수 선언 후 버전 3-1
      return { ...state, money: state.money + Number(action.payload) };
    case "MINUS": // MINUS 상수 선언 전 버전 3
    case MINUS: // MINUS 상수 선언 후 버전 3-1
      return { ...state, money: state.money - Number(action.payload) };
    default:
      return state;
  }
};

export default Prac1Reducer;
