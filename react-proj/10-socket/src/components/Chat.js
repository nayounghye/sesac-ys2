export default function Chat({ chat, isFirst, isLast }) {
  let chatClass = `list ${chat.type}-chat`;
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
      <div className={chatClass}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
