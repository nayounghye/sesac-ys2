const initialValue = { number: 100 };
// state : {number : 100}
const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { number: state.number + 1 };
    case "DECREMENT":
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
