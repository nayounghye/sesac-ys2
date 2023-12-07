import Prac1_1_style from "../../styles/Prac1_1.scss";
import bush from "./grass.png";

function Prac1_1() {
  const image = {
    bush: bush,
  };

  return (
    <>
      <h1>실습1 Style</h1>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>

        <img className="grass" src={[bush]} alt="잔디" />
      </div>
    </>
  );
}

export default Prac1_1;
