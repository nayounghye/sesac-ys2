// 함수형 컴포넌트 작성법 1
// export default FuncComponent = () => {
//   return
//   <div>Function Component 입니다!</div>;
// };

// 함수형 컴포넌트 작성법 2
// function FuncComponent() {
//     return(
//    <div>Function Component 입니다!</div>
//);
// }
// export default FuncComponent;
import image from "./Jordy.jpeg";

function FuncComponent() {
  const text = "jordy";
  const name = "naraka";
  const ifRenderTest = () => {
    if (name === "naraka") {
      return "안녕하세요!";
    } else if (name === "richard") {
      return "반가워요!";
    } else {
      return "누구세요?";
    }
  };
  const style = { fontSize: "20px", color: "red" };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return 해야한다. */}
      <div>Function Component 입니다!</div>
      <div>Function Component 입니다!</div>

      {/* 2. JS 문법 사용이 가능하다.(변수)) */}
      <h3>hello {text}</h3>

      {/* 2. JS 문법 사용이 가능하다.(삼항 연산자를 조건에 따른 렌더링(간단한 것만 가능)) */}
      <h4>{name == "naraka" ? "안녕하세요!" : "누구세요?"}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면 위에서 함수(18~26번째줄)로 만들고 밑에서 불러오면 된다. */}
      <h4>{ifRenderTest()} </h4>

      {/* 2-2. 조건에 따른 렌더링 (논리연산자 : &&) */}
      {/* && : 앞의 내용이 참이면 뒷 내용을 아예 읽지 않음. 바로 참인 곳에서 종료됨. 거짓일 때 리턴값을 설정할 필요가 없음!*/}
      <h5>{name === "naraka" && "나라카다!"}</h5>

      {/* 3. inline style 적용 방법 -> style 속성 값으로 객체{} 전달 */}
      <div style={{ fontSize: "30px", color: "red" }}>안녕하니니!</div>
      {/* 3-1. inline style 적용 방법 -> 위에서 선언하고 밑에서 불러오면 된다. */}
      <div style={style}>반갑니니!</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      {/* <div class="" onclick="함수();" > -> 원래 html에서 사용하는 방식 */}
      <div className="test-css">jsx에서 css사용하기(className)</div>

      {/* html에서는 onclick안에 함수를 '호출'해서 사용함, jsx에서는 함수를 '선언'해서 사용한다. */}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그는 필수! */}
      <br />
      {/* "/" 경로는 public 폴더 안을 의미한다. */}
      <img src="/logo192.png" />
      {/* src 폴더 내부 이미지를 사용할 경우 -> 위에서 이미지를 import 해서 가져오기! */}
      <img src={image} style={{ width: "100px", height: "120px" }} />
    </>
  );
}

export default FuncComponent;
