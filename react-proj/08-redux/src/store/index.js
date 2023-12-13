import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";
import Prac1Reducer from "./Prac1Reducer";

const rootReducer = combineReducers({
  bank: Prac1Reducer,
  counter: counterReducer,
  isData: isDataReducer,
});

export default rootReducer;
