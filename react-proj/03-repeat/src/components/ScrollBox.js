import { useRef } from "react";

function ScrollBox() {
  const box = useRef();
  const scrollTop = () => {
    box.current.scrollTop = 0;
  };
  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>죠르디</h1>
        <h1>앙몬드</h1>
        <h1>스카피</h1>
        <h1>판다주니어</h1>
        <h1>콥&빠냐</h1>
        <h1>케로베로니</h1>
        <h1>죠르디</h1>
        <h1>앙몬드</h1>
        <h1>스카피</h1>
        <h1>판다주니어</h1>
        <h1>콥&빠냐</h1>
        <h1>케로베로니</h1>
        <h1>죠르디</h1>
        <h1>앙몬드</h1>
        <h1>스카피</h1>
        <h1>판다주니어</h1>
        <h1>콥&빠냐</h1>
        <h1>케로베로니</h1>
        <button onClick={scrollTop}>위로</button>
      </div>
    </>
  );
}

export default ScrollBox;
