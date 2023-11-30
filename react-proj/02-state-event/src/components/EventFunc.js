import { useState } from "react";

function EventFunc(e) {
  const [msg, setMsg] = useState("hello");
  const handleOnClick = () => {
    console.log(e.target);
    setMsg("bye");
  };
  const [name, setName] = useState("");

  //   함수선언식
  function handleOnClickHello() {
    setMsg("hello");
  }

  //   함수표현식
  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const handleEnter = (e) => {
    console.log(e);
    if (e.key == "Enter") {
      console.log("엔터가 눌렸습니다!");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event handing 공부</h3>
      <div>
        {msg}
        {/* <button onClick={handleOnClick}>잘가</button>
        <button onClick={handleOnClickHello}>안녕</button>

        {/* 함수에서 매개변수를 받고싶을 때 어캐해?*/}
        {/* 방법1. onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
        {/* <button
          onClick={() => {
            handleOnClickTest("안녕?");
          }}
        >
          방법1
        </button> */}
        {/* 방법2. .bind를 이용한다. */}
        {/* bind의 첫번째 매개변수는 '.' 앞에 있는 함수(handleOnClickTest)의 this를 결정한다. */}
        {/* 첫번째 매개변수는 해당 함수의 this를 결정하는 걸로 이미 역할이 결정되어 있으므로, 받아올 매개변수는 첫번째를 제외한 두번째 매개변수부터 받아오면 된다. */}
        {/* 두번째 인자로 원하는 값을 넘겨주면 된다. */}
        <button onClick={handleOnClickTest.bind(null, "안녕?")}>방법2</button>
        <br />
        <br />
        {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히도록 설정 */}
        <input
          type="text"
          value={name}
          // input의 값을 넘길 때 아래와 같이 쓴다.
          onChange={(e) => {
            // console.log(e.target);
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        ></input>
      </div>
    </>
  );
}

export default EventFunc;
