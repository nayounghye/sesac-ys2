const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수이다.
// 필요성 : action type의 이름이 바뀐다고 가정하면 action 을 발생시키는 모든 곳(dispatch를 사용한 모든 곳)에서
// action.type을 하나하나 찾아헤매면서 다 변경해줘야 하므로, 이런 번거로움을 해결하기 위해 사용한다.
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const initialValue = { number: 100 };
// state : {number : 100}
const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    // 액션이 "INCREMENT"이거나, INCREMENT를 만났을 때 리턴값을 보낸다.
    case "INCREMENT": // INCREMENT 상수 선언 전 버전 3
    case INCREMENT: // INCREMENT 상수 선언 후 버전 3-1
      return { number: state.number + 1 };
    case "DECREMENT": // DECREMENT 상수 선언 전 버전 3
    case DECREMENT: // DECREMENT 상수 선언 후 버전 3-1
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
