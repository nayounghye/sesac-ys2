import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  // as: type 단언 
  // ts컴파일러가 null, undefined가 가능하다고 해석하고 있고, 
  // 우리는 #root가 존재한다고 단언(확신)할 수 있는 상황이기 때문에, as를 사용해 type을 지정해줌.
  //  document.getElementById("root") type이 THTMLElement이다 라는 뜻.
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
