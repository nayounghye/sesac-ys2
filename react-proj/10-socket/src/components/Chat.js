export default function Chat({ chat, isFirst, isLast, userId }) {
  let chatClass = `list ${chat.type}-chat`;
  let nameClass = `list ${chat.type}-name`;
  if (isFirst && isLast) {
    chatClass += " only-chat";
  } else if (isFirst) {
    chatClass += " first-chat";
  } else if (isLast) {
    chatClass += " last-chat";
  }
  return (
    <>
      {/* 컴포넌트화한 이유 : 공지와 채팅리스트가 ui가 다르므로 분리함! */}
      {/* isFirst가 true일 때만 userId 표시 */}
      {isFirst && <div className="user-id">{userId}</div>}
      <div className={chatClass}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
