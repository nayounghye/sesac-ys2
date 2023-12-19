import { useState } from "react";
import "../styles/chat.css";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

export default function Chatting1() {
  const [msgInput, setMsgInput] = useState();
  const [chatList, setChatList] = useState([
    {
      type: "my",
      content: "죠하!",
    },
    {
      type: "other",
      content: "죠랭이 안녕이니니!",
    },
    {
      type: "notice",
      content: "님이 입장하셨습니다.",
    },
  ]);

  const sendMsg = () => {};

  return (
    <>
      <h3>실습2,3</h3>
      <ul>
        <li>실습2 : 채팅창 ui</li>
        <li>실습3 : 소켓ID 이용하여 누가 입장했는지 공지 띄우기</li>
      </ul>
      <div className="chat-container">
        {chatList.map((chat, i) => {
          if (chat.type === "notice") return <Notice key={i} chat={chat} />;
          else return <Chat key={i} chat={chat} />;
        })}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
        ></input>
        <button onClick={sendMsg}>전송</button>
      </div>
    </>
  );
}
