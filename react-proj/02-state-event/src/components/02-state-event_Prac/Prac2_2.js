import { useState } from "react";

function Prac2_2() {
  const [text, setMsg] = useState("검정색 글씨");
  const [textcolor, setColor] = useState("black");

  const handleOnClickRed = () => {
    setMsg("빨간색 글씨");
    setColor("red");
  };

  const handleOnClickBlue = () => {
    setMsg("파란색 글씨");
    setColor("blue");
  };

  return (
    <>
      <h1>이벤트 핸들링 실습 2</h1>
      <h2 style={{ color: textcolor }}>{text}</h2>
      <button onClick={handleOnClickRed}>빨개져라!</button>{" "}
      <button onClick={handleOnClickBlue}>파래져라!</button>
    </>
  );
}

export default Prac2_2;
