export default function Chat({ chat }) {
  return (
    <>
      {/* 컴포넌트화한 이유 : 공지와 채팅리스트가 ui가 다르므로 분리함! */}
      <div className={`list ${chat.type}-chat`}>
        <div className="content">{chat.content}</div>
      </div>
    </>
  );
}
