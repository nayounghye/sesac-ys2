import comeoncss from "../styles/origin.scss";

function SassComponent() {
  return (
    // CSS를 편하게 작성하게 해주는 SCSS
    <>
      <div className="scss-parents">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
        <div className="box green"></div>
        <div className="box blue"></div>
        <div className="box navy"></div>
        <div className="box purple"></div>
      </div>

      <div className="scss-parents">안녕하세요</div>
      <div className="box1"></div>
      <div className="box2"></div>
    </>
  );
}

export default SassComponent;
