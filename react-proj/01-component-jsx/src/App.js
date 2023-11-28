import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";
import Prac1 from "./components/Prac1";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import Prac2_1 from "./components/Prac2_1";
import Prac2_2 from "./components/Prac2_2";
import Prac2_3 from "./components/Prac2_3";

const name = "테리";
const animal = "요크셔테리어";
const style = { textDecoration: "underline" };
const a = 930;
const b = 214;
function App() {
  return (
    <div className="App">
      {/* <ClassComponent />
      <FuncComponent />
      <FuncComponent></FuncComponent>
      <Prac1 />
      props에 title과 content가 객체로 들어간다.
      <FuncPropsEx title="SeSAC" content="hello world" number={231128} />
      <FuncPropsEx number={231128} />
      <Section title="NINIZ 영역">
        <div>NINIZ 영역의 content다니니</div>
      </Section>
      <Section title="Jordy 영역">
        <h5>Jordy 영역의 content다니니</h5>
      </Section>
      <ClassPropsEx title="SeSAC" content="hello world" number={231128} />
      <ClassPropsEx content="hello world" number={231128} /> */}
      {/* <Prac2_1 food="사과" /> */}
      {/* <Prac2_2
        title="죠르디 24시"
        author="죠르디"
        price="19,800"
        type="캐릭터에세이"
      /> */}
      <Prac2_3
        text="App 컴포넌트에서 넘겨준 text props입니다."
        vaild={() => console.log("밥먹자!")}
      />
    </div>
  );
}

export default App;
