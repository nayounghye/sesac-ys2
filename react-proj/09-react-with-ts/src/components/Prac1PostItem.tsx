import { Post } from "../types/typesprac1";

interface PostProps {
  post: Post;
}

// PostItem 컴포넌트입니다.
const PostItem = ({ post }: PostProps) => {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
