import { useMemo, useState } from "react";

export default function UseCallbackEx() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.targer.value);
  };
  return (
    <>
      <h3> usecallback 공부 </h3>
      <input type="text" value={text} onChange={handleOnChange} />
    </>
  );
}
