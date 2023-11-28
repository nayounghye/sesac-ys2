function Prac1() {
  const name = "테리";
  const animal = "요크셔테리어";
  const style = { textDecoration: "underline" };
  const a = 930;
  const b = 214;
  return (
    <>
      <h1>Jsx 실습 1</h1>
      <h2>
        <a style={style}>{name}</a>는 <a style={style}>{animal}</a>입니다.
        <br />제 반려 동물의 이름은&nbsp;
        <a style={style}>{name}</a>입니다.
      </h2>
      <h1>Jsx 실습 2</h1>
      <h2>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</h2>
      <h1>Jsx 실습 3</h1>
      <h2>{a > b && "a가 b보다 큽니다."}</h2>
      <h1>Jsx 실습4</h1>
      <div className="prac-css1">
        <h2 className="prac-css2">로그인</h2>
        <div className="prac-css3">
          아이디 : <input type="text"></input>
          <br />
          <br />
          비밀번호 : <input type="password"></input>
        </div>
      </div>
    </>
  );
}

export default Prac1;
