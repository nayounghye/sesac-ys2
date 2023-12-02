import { useState } from "react";
import jordyimage from "./jordy.jpeg";
import angmondimage from "./angmond.jpeg";
import scapyimage from "./scapy.jpeg";

function Prac2_4() {
  const [ninizimage, setNiniz] = useState("");
  const [bgcolor, setbgColor] = useState("");
  const [textcolor, setTextColor] = useState("white");
  const [text, setText] = useState("text");

  const images = {
    jordy: jordyimage,
    angmond: angmondimage,
    scapy: scapyimage,
  };

  const backgroundcolor = {
    black: "black",
    yellow: "#FFFCD9",
    blue: "#e2f5f9",
    gray: "#E9E9E7",
  };

  const color = {
    white: "white",
    brown: "#C57C4C",
    navy: "#4c73af",
    darkgray: "#5F5F69",
  };

  // 니니즈 이미지
  const handleOnClickNiniz = (e) => {
    setNiniz(e.target.value);
  };

  // 배경색
  const handleOnClickBg = (e) => {
    setbgColor(backgroundcolor[e.target.value]);
  };

  // 글자색
  const handleOnColor = (e) => setTextColor(color[e.target.value]);

  // text 입력
  const handleOntext = (e) => {
    setText([e.target.value]);
  };

  return (
    <>
      <h1>이벤트 핸들링 실습 4</h1>
      니니즈 :{" "}
      <select onChange={handleOnClickNiniz}>
        <option value="jordy">죠르디</option>
        <option value="angmond">앙몬드</option>
        <option value="scapy">스카피</option>
      </select>{" "}
      배경색 :{" "}
      <select onChange={handleOnClickBg}>
        <option value="black">검정색</option>
        <option value="yellow">노란색</option>
        <option value="blue">파란색</option>
        <option value="gray">회색</option>
      </select>{" "}
      글자색 :{" "}
      <select onChange={handleOnColor}>
        <option value="white">흰색</option>
        <option value="brown">갈색</option>
        <option value="navy">남색</option>
        <option value="darkgray">진회색</option>
      </select>
      <br />
      <br />
      내용 : <input type="text" onChange={handleOntext}></input>
      <br />
      <br />
      {ninizimage && (
        <img
          src={images[ninizimage]}
          style={{ width: "200px", height: "200px" }}
        />
      )}
      <br />
      <br />
      <div
        class="textBox"
        style={{
          backgroundColor: bgcolor,
          color: textcolor,
          width: "200px",
          height: "50px",
        }}
      >
        <h2>{text}</h2>
      </div>
    </>
  );
}

export default Prac2_4;
