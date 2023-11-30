import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
    };
    // 함수 선언문을 사용하여 메소드를 만들 때, 메소드 내부에서 클래스의 this를 사용하고 싶을 경우에
    // 생성자 내에서 this를 bind해주는 작업을 거쳐야 한다.
    // 즉, 함수 안에 bind를 사용해서 this값을 직접 넘겨줘야 한다.
    // 그래야 handleOnClick 내부에서 클래스를 가리키고 있는 this를 사용할 수 있다.
    // bind : 함수에다 인자를 넘겨주는 역할을 한다.
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // 함수 선언문을 사용하여 메소드를 정의함!
  /**  함수 선언문의 특징
   * 1. 함수 내부에서 자체적인 this를 만들 수있다. -> this가 클래스의 this가 아니게 된다.
   * 2. 이 this 는 아무것도 담겨있지 않은 상태 (undefine)
   * 이 문제를 해결하기 위해 bind를 써서 this값을 넘겨줘야 한다.
   */
  //   this에 아무 값도 안담기는 걸 해결하는 방법
  // 해결법 1. 생성자 내부에서 this를 원하는 것으로 바인딩한다.
  // 해결법 2. 함수표현식을 사용한다.
  //정확한 설명: 함수 선언문은 동적 바인딩을 하기 때문에 함수가 사용될 때 this가 결정된다.
  handleOnClick() {
    this.setState({ msg: "bye" });
  }

  // 함수표현식
  // 함수가 선언될 때 this를 결정짓는다. 즉, 부모에 있는 this를 가져온다.
  //  (정적 바인딩)
  handleOnClickHello = () => {
    this.setState({ msg: "hello" });
  };

  // 함수선언문과 함수표현식의 차이점 : 함수 선언문은 this객체를 자체적으로 가질 수 있다.

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handing 공부</h3>
        {this.state.msg}
        <br />
        <br />
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>
      </>
    );
  }
}

export default EventClass;
