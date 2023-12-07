import { useState } from "react";
import "./App.css";
import UseMemoEx from "./components/UseMemoEx";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbacEx2";
import UseReducer from "./components/UseReducer";
import CustomHookEx from "./components/CustomHookEx";

function App() {
  const [postId, setPostID] = useState(1);
  return (
    <div>
      <UseMemoEx />
      <UseCallbackEx />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostID(postId + 1)}>+1</button>
      <UseReducer />
      <CustomHookEx />
    </div>
  );
}

export default App;
