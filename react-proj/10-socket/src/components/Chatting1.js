import { useEffect, useState } from "react";
import "../styles/chat.css";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000/", { autoConnect: false });

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

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();

    // 이슈 1 : mount 시에만 한 번 읽고 끝남! -> newChatList를 만들 때 마운트 시점에 chatList만 이용하게 되버림. -> 내 공지가 자꾸 바뀌는 문제 발생
    // newChatList를 만들 때, mount 시점에 chatList만 이용하게 된다.
    // socket.on("notice", (res) => {
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });
  }, []);

  useEffect(() => {
    // 해결 1 : ChatList가 변경될 때마다 useEffect 이벤트를 다시 만들도록 하면 해결된다.
    // 이슈 2 : 위 해결방법으로 하면 ChatList가 변경될 때마다 notice이벤트가 계속 누적되는 문제가 발생.
    // socket.on("notice", (res) => {
    //   console.log("notice");
    //   const newChatList = [...chatList, { type: "notice", content: res.msg }];
    //   setChatList(newChatList);
    // });
    // 해결 2 : return을 이용해서 notice 이벤트를 제거 후 다시 생성하게 만듦.

    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

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
