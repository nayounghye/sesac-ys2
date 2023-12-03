import { useState } from "react";

function Prac1_34() {
  const userSubmit = [];
  const [list, setList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newUser, setNewUser] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

  // 검색 함수
  const searchTable = () => {
    // 작성 검색
    if (searchType === "작성자") {
      const result = list.filter((value) => value.user.includes(searchKeyword));
      setSearchResult(result);
      // 제목 검색
    } else if (searchType === "제목") {
      const result = list.filter((value) =>
        value.title.includes(searchKeyword)
      );
      setSearchResult(result);
    }
  };

  const handleSearch = () => {
    searchTable();
  };

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
        />
        <button onClick={addTable}>작성</button>
      </fieldset>
      <br />
      <div id="searchBox">
        <select
          value={searchType}
          onChange={(e) => {
            setSearchType(e.target.value);
          }}
        >
          <option>작성자</option>
          <option>제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        />
        <button onClick={handleSearch}>검색</button>
        <button onClick={() => setSearchResult([...userSubmit, ...list])}>
          전체
        </button>
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
              <tr key={value.id}>
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
      {searchResult.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h4>검색 결과가 없습니다.</h4>
      )}
    </>
  );
}

export default Prac1_34;
