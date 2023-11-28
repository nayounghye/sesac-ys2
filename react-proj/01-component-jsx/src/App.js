import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import Prac1 from "./components/Prac1";
import FuncPropsEx from "./components/FuncPropsEx";

const name = "테리";
const animal = "요크셔테리어";
const style = { textDecoration: "underline" };
const a = 930;
const b = 214;
function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FuncComponent /> */}
      {/* <FuncComponent></FuncComponent> */}
      {/* <Prac1 /> */}
      {/* props에 title과 content가 객체로 들어간다. */}
      <FuncPropsEx title="SeSAC" content="hello world" number={231128} />
    </div>
  );
}

export default App;
