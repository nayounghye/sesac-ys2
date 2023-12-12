// 버전1. props drilling 예시
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <App />
// );

// 버전2. redux 적용
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux from "./AppRedux";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// const initialValue = { number: 100 };
// // state : {number : 100}
// const reducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { number: state.number + 1 };
//     case "DECREMENT":
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

// const store = configureStore({ reducer: reducer }, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux />
//   </Provider>
// );

// 버전3. 리덕스 구조화
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRedux2 from "./AppRedux2";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRedux2 />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
