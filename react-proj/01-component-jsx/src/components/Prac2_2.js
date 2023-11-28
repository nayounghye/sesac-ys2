import PropTypes from "prop-types";

function Prac2_2({ title, author, price, type }) {
  return (
    <>
      <h1> Props 실습 2</h1>
      <div className="Prac2_2__container">
        <h3 className="Prac2_2__title">이번주 베스트셀러</h3>
        <img src="/Jordy 24.png" style={{ width: "100px", height: "100px" }} />
        <div className="Prac2_2__booktitle">{title}</div>
        <div className="Prac2_2__bookcontainer">
          <a>저자: {author}</a>
          <br />
          <a>판매가: {price}원</a>
          <br />
          <a>구분: {type}</a>
        </div>
      </div>
    </>
  );
}

Prac2_2.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default Prac2_2;
