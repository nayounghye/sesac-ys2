import { useState } from "react";

function Prac1_34() {
  const userSubmit = [{ id: "1", title: "죠하", user: "죠르디" }];
  const [list, setList] = useState(userSubmit);
  const [newTitle, setNewTitle] = useState("");
  const [newUser, setNewUser] = useState("");

  // 표에 추가
  const addTable = () => {
    const newObj = {
      id: list.length + 1,
      title: newTitle,
      user: newUser,
    };
    const newTable = list.concat(newObj);
    setList(newTable);
    setNewTitle("");
    setNewUser("");
  };

  // enter 키 기능 추가 : 작성
  const handleEnter = (e) => {
    if (e.key == "Enter") {
      addTable();
    }
  };

  // enter 키 기능 추가 : 검색
  // const handleSearch = (e) => {
  //   if (e.key == "Enter") {
  //     addSearch();
  //   }
  // };

  return (
    <>
      <h1>map 실습 3,4</h1>
      <fieldset id="submitBox">
        <label>작성자 : </label>
        <input
          type="text"
          value={newUser}
          onChange={(e) => {
            setNewUser(e.target.value);
          }}
        />
        <label>제목 : </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button onClick={addTable}>작성</button>
      </fieldset>
      <br />
      <div id="searchBox">
        <select>
          <option>작성자</option>
        </select>
        <input type="text" placeholder="검색어" />
        <button>검색</button>
        <button>전체</button>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value) => {
            return (
              <tr>
                <td value="id" key={value.id}>
                  {value.id}
                </td>
                <td value="title" key={value.title}>
                  {value.title}
                </td>
                <td value="user" key={value.user}>
                  {value.user}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <h4>검색 결과</h4>
      <h4>검색결과가 없습니다.</h4>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td value="id"></td>
            <td value="title"></td>
            <td value="user"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Prac1_34;
