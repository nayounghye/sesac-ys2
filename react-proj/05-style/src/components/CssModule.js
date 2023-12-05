import comeoncss from "../styles/origin.module.css";

function CssModule() {
  return (
    <>
      <div className={comeoncss.origin}>
        <div className={`${comeoncss.box} ${comeoncss.red}`}></div>
        <div className={[comeoncss.box, comeoncss.orange].join("  ")}></div>
        {/* 배열에 join메소드가 있는데, ['a', 'b'].join(' ') 의 결과값  [a b]  로 나온다.*/}
        <div className={`${comeoncss.box} ${comeoncss.yellow}`}></div>
        <div className={`${comeoncss.box} ${comeoncss.green}`}></div>
        <div className={`${comeoncss.box} ${comeoncss.blue}`}></div>
        <div className={`${comeoncss.box} ${comeoncss.navy}`}></div>
        <div className={`${comeoncss.box} ${comeoncss.purple}`}></div>
      </div>
    </>
  );
}

export default CssModule;
