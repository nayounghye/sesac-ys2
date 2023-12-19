import io from "socket.io-client";
import { useEffect, useRef } from "react";

// { autoConnect: false } : 리액트는 계속 리렌더링되므로 렌더링될 때마다 커텍트되는 걸 방지하기 위한 코드
const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };
  useEffect(() => {
    initSocketConnect();

    socket.on("resHello", (res) => {
      console.log(res);
      resultMsg(res);
    });
    socket.on("resStudy", (res) => {
      console.log(res);
      resultMsg(res);
    });
    socket.on("resBye", (res) => {
      console.log(res);
      resultMsg(res);
    });
  }, []);

  const resultMsg = (res) => {
    result.current.innerText = res.msg;
  };

  const hello = () => {
    socket.emit("hello", { msg: "hello" });
  };
  const study = () => {
    socket.emit("study", { msg: "study" });
  };
  const bye = () => {
    socket.emit("bye", { msg: "bye" });
  };

  const result = useRef(null);

  return (
    <>
      <h3>Socket 실습 1</h3>
      <button onClick={hello}>hello</button>
      <button onClick={study}>study</button>
      <button onClick={bye}>bye</button>
      <p ref={result}></p>
    </>
  );
}
