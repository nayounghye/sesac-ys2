import { Component } from "react";

class LifeCycleClass extends Component {
  state = { text: "" };

  //   1. 컴포넌트가 마운트 될 때
  componentDidMount() {
    console.log("class component : 💡 mount");
  }
  //   2. 컴포넌트가 업데이트 될 때
  componentDidUpdate(prevProps, prevState) {
    console.log("class component : 🔥 update");

    // text state가 변경될 때마다 if문 안에 있는 코드를 실행시킨다.
    if (prevState.text != this.state.text) {
      console.log("class component : 🔥 text update");
    }
  }

  //   3. 컴포넌트가 unmount될 때
  componentWillUnmount() {
    console.log("class component : 🔥💡 unmount");
  }
  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div> number: {this.props.number}</div>
        <input
          type="text"
          value={this.props.text}
          onChange={(e) => this.setText({ text: e.target.value })}
        ></input>
      </>
    );
  }
}

export default LifeCycleClass;
