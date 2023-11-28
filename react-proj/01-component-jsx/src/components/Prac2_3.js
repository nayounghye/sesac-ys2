import { Component } from "react";
import PropTypes from "prop-types";

class Prac2_3 extends Component {
  render() {
    return (
      <>
        <h1> Props 실습 3</h1>
        <h2>{this.props.text}</h2>
        <button
          type="button"
          onClick={() => {
            this.props.vaild();
          }}
        >
          밥먹는 버튼
        </button>
      </>
    );
  }
  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}

export default Prac2_3;
