import "../styles/chat.css";
import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", { autoConnect: false });
export default function Chatting3() {
  const [msgInput, setMsgInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("all");

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  // 입력 필드에 대한 참조 생성
  const userIdInputRef = useRef(null);
  const msgInputRef = useRef(null);

  // 닉네임 입력창 포커스
  useEffect(() => {
    if (userIdInputRef.current) {
      userIdInputRef.current.focus();
    }
  }, []);

  // 채팅 입력창 포커스
  useEffect(() => {
    if (userId && msgInputRef.current) {
      msgInputRef.current.focus();
    }
  }, [userId]);

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);

  // useMemo : 값을 메모라이징 한다.
  // 뒤에 있는 의존성 배열에 있는 값이 업데이트될 때마다 연산을 실행함.
  const userListOptions = useMemo(() => {
    // [<option></option>,<option></option>]
    // key of : 배열을 검색
    // key in : 객체를 검색
    const options = [];
    for (const key in userList) {
      // key : userList의 key값 (=socket id)
      // userList[key] : userList의 value값 (=유저 id)
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);
  // useCallback: 함수를 메모라이징 한다.
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함.
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `&{res.dm ? "(속닥속닥)" : ''} ${res.userId}:${res.msg}`;
      const newChatList = [
        ...chatList,
        { type: type, userId: res.userId, content: `${res.msg}` },
      ];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: userIdInput });
  };

  return (
    <>
      {/* <h3>실습 4, 5번</h3>
      <ul>
        <li>채팅창 메시지 전송</li>
        <li>DM 기능 구현</li>
      </ul> */}

      {userId ? (
        <>
          <div>{userId}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              const isFirstChild = i === 1;
              const isLastChild = i === chatList.length - 1;
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else
                return (
                  <Chat
                    key={i}
                    chat={chat}
                    isFirst={isFirstChild}
                    isLast={isLastChild}
                    userId={chat.userId}
                  />
                );
            })}
          </div>
          <div className="input-container chat">
            <div className="send-container">
              <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
                <option value="all">전체</option>
                {userListOptions}
                <option></option>
              </select>
              <input
                type="text"
                value={msgInput}
                onChange={(e) => setMsgInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMsg()}
                ref={msgInputRef}
              />

              <button type="button" onClick={sendMsg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="input-container name">
            <input
              type="text"
              value={userIdInput}
              onChange={(e) => setUserIdInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && entryChat()}
              ref={userIdInputRef}
              placeholder="닉네임을 입력하세요."
            />
            <button onClick={entryChat}>입장</button>
          </div>
        </>
      )}
    </>
  );
}
