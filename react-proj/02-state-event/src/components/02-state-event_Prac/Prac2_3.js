import { useState } from "react";

function Prac2_3() {
  const [text, setMsg] = useState("죠하!!");
  const [button, setClick] = useState("죠르디 이리와!");

  const handleOnClick = () => {
    if (text === "죠하!!") {
      setMsg("");
      setClick("죠르디 들어가!");
    } else {
      setMsg("죠하!!");
      setClick("죠르디 이리와!");
    }
  };

  return (
    <>
      <h1>이벤트 핸들링 실습 3</h1>
      <button onClick={handleOnClick}>{button}</button> <h2>{text}</h2>
    </>
  );
}

export default Prac2_3;
