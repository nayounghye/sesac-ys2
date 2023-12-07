import { useMemo, useState } from "react";
// useMemo : Rendering 할 때, 불필요한 연산을 방지해주는 hook이다.

// 함수 선언과 동시에 내보내기하는 방법 앞으로 일캐쓰자 편한듯!
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 비효율적인 방법 예시 : count state가 변경되지 않아도, rendering될 때 마다 다시 연산을 하는 비효율적 방식으로 진행됨.
  // => count가 변경될 때만 연산하도록 변경하려면? useMemo를 이용하면 해결할 수 있다.
  // const calc = () => {
  //   console.log("calc complete!!!!");
  //   return count * 2;
  // };
  // const calcValue = calc()

  // 위 내용을 해결하기 위한 useMemo 사용 예시
  // 구성: useMemo(() => {}, []); // useMemo(콜백함수, 의존성 배열)
  // 여기서 useMemo는 불필요한 연산을 방지하고, 결론적으로 값을 기억하고 있다가 count의 변경이 있을 때만 다시 연산하여 calc에 값을 담아둔다.
  const calc = useMemo(() => {
    console.log("calc complete!!!!");
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo 공부</h3>
      <div>
        count: {count}{" "}
        <button type="button" onClick={() => setCount(count + 1)}>
          +1
        </button>
      </div>
      {/* useMemo를 사용하지 않은 경우 */}
      {/* <div>calc : {calcValue} </div> */}
      {/* useMemo를 사용한 경우 */}
      <div>calc : {calc} </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
