// 함수형 컴포넌트 작성법 1
// export default FuncComponent = () => {
//   return;
//   <div>Function Component 입니다!</div>;
// };

// 함수형 컴포넌트 작성법 2
// function FuncComponent() {
//     return(
//    <div>Function Component 입니다!</div>
//);
// }
// export default FuncComponent;

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

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return 해야한다. */}
      <div>Function Component 입니다!</div>
      <div>Function Component 입니다!</div>

      {/* 2. JS 문법 사용이 가능하다.(변수)) */}
      <h3>hello {text}</h3>

      {/* 2. JS 문법 사용이 가능하다.(삼항 연산자를 조건에 따른 렌더링(간단한 것만 가능)) */}
      <h4>{name == "naraka" ? "안녕하세요!" : "누구세요?"}</h4>
      {/* 2-1. 복잡한 조건을 이용하고 싶다면 위에서 함수로 만들고 밑에서 불러오면 된다. */}
      <h4>{ifRenderTest()} </h4>
    </>
  );
}

export default FuncComponent;
