import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FuncComponent from "./components/FuncComponent";

function App() {
  return (
    <div className="App">
      <FuncComponent />
      {/* <FuncComponent></FuncComponent> */}
      <ClassComponent />
    </div>
  );
}

export default App;
