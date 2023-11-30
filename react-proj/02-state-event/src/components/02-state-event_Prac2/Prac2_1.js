import { Component } from "react";

class Prac2_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello Jordy!",
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ msg: "Bye Jordy!" });
  }

  render() {
    return (
      <>
        <h1>이벤트 핸들링 실습 1</h1>
        <h2>
          {this.state.msg} <button onClick={this.handleOnClick}>클릭</button>
        </h2>
      </>
    );
  }
}

export default Prac2_1;
