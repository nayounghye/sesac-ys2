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

// 버전3. redux 구조화
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux2 from "./AppRedux2";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux2 />
//   </Provider>
// );

// 버전4. redux 구조화 + containers 컴포넌트 폴더와 presentational 컴포넌트 폴더 분리
// containers 컴포넌트 폴더 : redux에 접근할 수 있는 파일들을 모아둔 폴더
// presentational 컴포넌트 폴더 : redux에 직접적으로 접근하는 파일들이 아닌 UI같은 것들만 모아둔 폴더
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppRedux3 from "./AppRedux3";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./store";

// const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <AppRedux3 />
//   </Provider>
// );

// 실습 1
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppPrac1 from "./AppPrac1";
import AppRedux from "./AppRedux";
import AppRedux2 from "./AppRedux2";
import AppRedux3 from "./AppRedux3";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <h1>실습1. Redux 실습</h1>
    <AppPrac1 />
    {/* <h1>버전1. props drilling 예시</h1>
    <App />
    <h1>버전2. redux 적용</h1>
    <AppRedux />
    <h1>버전3. redux 구조화</h1>
    <AppRedux2 />
    <h1>버전4. redux 구조화 + containers 컴포넌트 폴더와 presentational 컴포넌트 폴더 분리</h1>
    <AppRedux3 /> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
