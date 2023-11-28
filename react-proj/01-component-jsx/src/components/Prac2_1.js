import PropTypes from "prop-types";

function Prac2_1({ food }) {
  return (
    <>
      <div>
        <h1> Props 실습 1</h1>
        <h3>
          죠르디가 좋아하는 과일은 <a className="Prac2__food">{food}</a>다니니!
        </h3>
      </div>
    </>
  );
}

Prac2_1.defaultProps = {
  food: "사과",
};

Prac2_1.propTypes = {
  food: PropTypes.string,
};

export default Prac2_1;
