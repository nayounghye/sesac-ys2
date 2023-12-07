import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState();
  const [text, setText] = useState("");
  const fetchData = useCallback(async () => {
    console.log("포스트 삽입");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <h3> usecallback 공부2 </h3>
      <div>조회한 포스트 ID : {postId}</div>
      {post && (
        <div>
          <div>id: {post.id}</div>
          <div>title : {post.title}</div>
          <div>body : {post.body}</div>
        </div>
      )}
    </>
  );
}

// useMemo vs useCallback
// useMemo : 특정 값을 기억하여 불필요한 연산을 방지한다.
// useCallback : 특정 함수를 기억하여 불필요한 재선언을 방지한다.
