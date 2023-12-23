export default function Chat({ chat, isFirstOfType, userId }) {
  let chatClass = `list ${chat.type}-chat`;

  return (
    <>
      {/* 컴포넌트화한 이유 : 공지와 채팅리스트가 ui가 다르므로 분리함! */}
      {isFirstOfType && chat.type === "other" && (
        <div className="user-id">{userId}</div>
      )}
      {/* 'other-chat'의 첫 번째 메시지에만 userId 표시 */}
      {/* isFirst가 true일 때만 userId 표시 */}
      <div className={chatClass}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
