import { useState } from "react";

function EventFunc(e) {
  const [msg, setMsg] = useState("hello");
  const handleOnClick = () => {
    console.log(e.target);
    setMsg("bye");
  };
  function handleOnClickHello() {
    setMsg("hello");
  }
  return (
    <>
      <h3>함수형 컴포넌트 event handing 공부</h3>
      <div>
        {msg} <button onClick={handleOnClick}>잘가</button>
        <button onClick={handleOnClickHello}>안녕</button>
      </div>
    </>
  );
}

export default EventFunc;
