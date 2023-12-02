import { useState } from "react";

function Prac1_34() {
  const userSubmit = [{ id: "1", title: "죠하", user: "죠르디" }];
  const [list, setList] = useState(userSubmit);
  const [newTitle] = useState("");
  const [newUser] = useState("");
  return (
    <>
      <h1>map 실습 3,4</h1>
      <fieldset id="submitBox">
        <label>작성자 : </label>
        <input type="text" />
        <label>제목 : </label>
        <input type="text" />
        <button>작성</button>
      </fieldset>
      <br />
      <div id="searchBox">
        <select>
          <option>작성자</option>
        </select>
        <input type="text" />
        <button>검색</button>
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
          <tr>
            <td value="id"></td>
            <td value="title"></td>
            <td value="user"></td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4>검색 결과</h4>
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
