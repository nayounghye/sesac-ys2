import { useState } from "react";
import "./App.css";
import LifeCycleFunc from "./components/LifeCycleFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import Prac1_1 from "./components/04-lifecycle-Prac/Prac1_1";
import Prac1_1_lily from "./components/04-lifecycle-Prac/Prac1_1_lily";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setNumber(number + 1)}>plus</button>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "OFF" : "ON"}
      </button>
      {isShow && <LifeCycleFunc number={number} />}
      {isShow && <LifeCycleClass number={number} />} */}
      {/* <Prac1_1 /> */}
      <Prac1_1_lily />
    </div>
  );
}

export default App;
