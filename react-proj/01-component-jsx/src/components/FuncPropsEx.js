// 1. props 매개변수 (기본적인 사용법)
// function FuncPropsEx(props) {
//   // App.js 의 20번재줄에 적은 내용이 여기서 이렇게 객체로 넘어온다.
//   // props = {
//   //     title: "SeSAC"
//   //     content : "hello world"
//   // };

//   return (
//     <>
//       <div>함수형 컴포넌트를 이용( Props )</div>
//       <div>
//         여기는 {props.title}, 외쳐요 {props.content}!!
//       </div>
//     </>
//   );
// }

// 2. 매개변수로 props를 받아올 때 부터 구조분해를 사용해서 입력하는 방법
// function FuncPropsEx({ title, content }) {
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용( Props )</div>
//       <div>
//         여기는 {title}, 외쳐요 {content}!!
//       </div>
//     </>
//   );
// }

// 3. 컴포넌트 안에서 구조분해를 하는 방법
// function FuncPropsEx(props) {
//   const { title, content } = props;
//   return (
//     <>
//       <div>함수형 컴포넌트를 이용( Props )</div>
//       <div>
//         여기는 {title}, 외쳐요 {content}!!
//       </div>
//     </>
//   );
// }

// 4. porptype을 이용하여 어떤 props가 넘어올지 명시하는 방법
// 유연한 JS의 특징으로 인해 예기치 못한 오류가 발생할 수 있기 때문에 정확하게 명시하여 오류 발생을 예방.
// JS가 알아서 제대로 동작하게 하나, 개발자는 어디서 오류가 발생했는 지 알 수가 없게되므로 위 방법대로 진행함.
import PropTypes from "prop-types";
function FuncPropsEx({ title, content, number }) {
  return (
    <>
      <div>함수형 컴포넌트를 이용( Props )</div>
      <div>
        여기는 {title}, 외쳐요 {content}!! ({number})
      </div>
    </>
  );
}

FuncPropsEx.prototype = {
  title: PropTypes.string,
  content: PropTypes.string,
  number: PropTypes.number,
};

export default FuncPropsEx;
