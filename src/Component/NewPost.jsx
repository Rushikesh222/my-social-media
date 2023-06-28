import { useAuthContext } from "../Context/Authcontext";
import { usePost } from "../Context/Post-Context";

export const NewPost = () => {
  const { currentUser } = useAuthContext();
  const { createPost, setPostText, postText } = usePost();
  return (
    <div>
      <img src={currentUser?.avatarUrl} alt="avatar" />
      <input
        type="text"
        onChange={(e) => setPostText(e.target.value)}
        value={postText}
      />
      <button
        onClick={() => {
          createPost(postText);
        }}
      >
        Post
      </button>
    </div>
  );
};
