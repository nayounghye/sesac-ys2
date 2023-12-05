import { useEffect, useState } from "react";

function LifeCycleFunc(props) {
  const { number } = props;
  const [text, setText] = useState("");

  // useEffect (콜백함수, 의존성 배열)
  // 1. 의존성 배열이 빈 배열일 경우 (=mount될 때 라는 뜻)
  // 콜백함수 내부에서 return 뒤에 오는 함수를 unmount시에 실행을 시킨다.
  useEffect(() => {
    console.log("function component : 💡 a amount");
    return () => {
      console.log("function component : 💡 a amount");
    };
  }, []);

  // 2. 의존성 배열을 전달하지 않을 경우
  //   mount & update 시에 콜백함수를 실행시킴
  useEffect(() => {
    console.log("function component : 🔥 update");
  });

  // 3. 의존성 배열에 원소가 있을 경우
  // 해당 원소가 update(변경)될 때마다 callback 함수를 실행시킨다.
  useEffect(() => {
    console.log("function component : 💡🔥 update");
  }, [text]);
  return (
    <>
      <h2>함수형 컴포넌트 LifeCycle 공부</h2>
      <div> number: {number}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </>
  );
}

export default LifeCycleFunc;
