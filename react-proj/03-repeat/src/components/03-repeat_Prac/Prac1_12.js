import { useState } from "react";

function Prac1_12() {
  const userInfo = [{ name: "죠르디", mail: "jordy@kakao.com" }];
  const [list, setList] = useState(userInfo);
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");

  // list에 추가
  const addInfo = () => {
    const newObj = { name: newName, mail: newMail };
    const newList = list.concat(newObj);
    setList(newList);
    setNewName("");
    setNewMail("");
  };

  // enter키 기능 추가
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      addInfo();
    }
  };

  // list에 제거
  const deleteInfo = (name) => {
    const newList = list.filter((value) => value.name != name);
    setList(newList);
  };

  return (
    <>
      <h1>map 실습 1,2</h1>
      <input
        type="text"
        placeholder="이름"
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={newMail}
        onChange={(e) => {
          setNewMail(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button onClick={addInfo} id="submit">
        등록
      </button>
      <br />
      <div style={{ cursor: "pointer" }}>
        {list.map((value) => {
          return (
            <h3
              key={(value.name, value.mail)}
              onDoubleClick={() => {
                deleteInfo(value.name);
              }}
            >
              {" "}
              {value.name} : {value.mail}
            </h3>
          );
        })}
      </div>
    </>
  );
}

export default Prac1_12;
