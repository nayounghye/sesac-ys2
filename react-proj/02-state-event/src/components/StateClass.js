import { Component } from "react";

// 옛날 방식
class StateClass extends Component {
  // 만약 생성자를 구현하지 않으면 기본 생성자가 알아서 자동으로 실행된다.
  // 7~9번 줄이 자동으로 생성되어서 개발자가 직접 작성할 필요가 없음.
  // constructor(props) {
  //  super(props)
  // }
  // 원래는 자동으로 기본 생성자가 만들어졌으나, 내가 이렇게 생성자를 만드는 경우엔
  // 부모 클래스에 생성자를 반드시 추가해줘야지만 this같은 객체를 사용할 수 있게 된다.
  constructor() {
    super(); // super()는 부모 클래스의 생성자이다.
    // 중요!!! super()를 실행시켜야 this객체를 사용할 수 있다.
    this.state = {
      number: 0,
      test: "hello",
    };
  }

  render() {
    // const {number} = this.state
    return (
      <>
        {/* <div>props 예시 {this.props.name}</div> */}
        <h3>클래스형 컴포넌트 state 공부</h3>
        <div>
          number state value {this.state.number}{" "}
          <button
            onClick={() => {
              //state 변경은 일반 변수 변경하듯이 변수 값을 재할당하는 방식이 아닌,
              // state를 변경시키는 특정 함수를 사용해야 한다.
              // 클래스형 컴포넌트는 setState 메소드가 제공되며 이 함수로 state를 변경할 수 있다.
              this.setState({ number: this.state.number + 1 });
              //  34번 코드를 연달아 쓰면 결과값이 2 -> 4 -> 6 -> 8 ... 으로 되겠지? 라고 생각하고 연달아 setState 함수 입력
              this.setState({ number: this.state.number + 1 });
              // 만약 setState를 연달아 2번 사용해야할 때 위처럼 사용하면 원하는 결과를 얻을 수 없음.
              // state 변경은 비동기방식으로 실행되기 때문이다.

              // 그럼 동기방식으로 하려면??
              // 동기방식으로 진행하려면 아래와 같이 콜백함수를 사용하면 된다.
              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
              //  42-44번째 줄을 이렇게 표현해도 됨 같은 코드임.
              this.setState((prevState) => ({ number: prevState.number + 1 }));
              // 결과값: 동기방식으로 진행되어 3 -> 6 -> 9 ...로 진행됨
            }}
          >
            +1 버튼
          </button>
        </div>
      </>
    );
  }
}

// 현재 방식
// class StateClass extends Component {
//   state = {
//     number: 0,
//     text: "hello",
//   };
//   render() {
//     return (
//       <>
//         <h3>클래스형 컴포넌트 state 공부</h3>
//         <div>
//           number state value {this.state.number}{" "}
//           <button
//             onClick={() => {
//               this.setState({ number: this.state.number + 1 });
//             }}
//           >
//             +1 버튼
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// const getNumber = () => {
//   return 5;
// };

// const getNumber = () => 5;

export default StateClass;
