import { Component } from "react";

class Prac1_1 extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
    };
  }
  render() {
    const { number1, number2 } = this.state;
    return (
      <>
        <h1>State 실습 (클래스형 컴포넌트)</h1>
        <div>
          <h2>
            {number1}{" "}
            <button
              onClick={() => {
                this.setState({ number1: number1 + 2 });
              }}
            >
              +2
            </button>
          </h2>
          <h2>
            {number2}{" "}
            <button
              onClick={() => {
                this.setState({ number2: number2 - 1 });
              }}
            >
              -1
            </button>
          </h2>
        </div>
      </>
    );
  }
}

export default Prac1_1;
