import { useRef } from "react";

function FuncRef() {
  const input = useRef();
  const localVar = useRef(0);

  const focusInput = () => {
    input.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };
  return (
    <>
      <input type="text" ref={input} />
      <button type="button" onClick={focusInput}>
        벝은
      </button>
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        벝은
      </button>
    </>
  );
}
export default FuncRef;
