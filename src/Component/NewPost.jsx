import { useAuthContext } from "../Context/Authcontext";
import { usePost } from "../Context/Post-Context";
import "./NewPost.css";
export const NewPost = () => {
  const { currentUser } = useAuthContext();
  const { createPost, setPostText, postText } = usePost();
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox-input">
          <img src={currentUser?.avatarUrl} alt="avatar" />
          <input
            type="text"
            onChange={(e) => setPostText(e.target.value)}
            value={postText}
            placeholder="What's happening?"
          />
        </div>
        <div className="tweetbox-button">
          <button
            className="tweetBox_tweetButton"
            onClick={(e) => {
              e.preventDefault();
              createPost(postText);
            }}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
};
