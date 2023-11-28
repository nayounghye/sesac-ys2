import { Component } from "react";
import PropTypes from "prop-types";

// 1. 클래스 밖에서 proptypes를 적는 방법
// class ClassPropsEx extends Component {
//   render() {
//     return (
//       <>
//         <div>클래스형 컴포넌트를 이용 ( Props )</div>
//         <div>
//           여기는 {this.props.title}, 외쳐요 {this.props.content}!! 오늘 날짜는{" "}
//           {this.props.number}
//         </div>
//       </>
//     );
//   }
// }
// ClassPropsEx.defaultProps = {
//   title: "SeSAC용산",
// };
// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

// 2. static을 이용해  proptypes를 클래스 내에 적는 방법.
class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트를 이용 ( Props )</div>
        <div>
          여기는 {this.props.title}, 외쳐요 {this.props.content}!! 오늘 날짜는{" "}
          {this.props.number}
        </div>
      </>
    );
  }
  static defaultProps = {
    title: "SeSAC용산",
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}

export default ClassPropsEx;
