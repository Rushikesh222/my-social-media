import { useContext, useEffect, useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../Context/bookmark-context";
import { useAuthContext } from "../Context/Authcontext";
import { DeletePost } from "./DeletePost";
import { useUser } from "../Context/user-context";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, createdAt } = userPost;

  const navigate = useNavigate();

  const { userState } = useUser();
  const { currentUser } = useAuthContext();
  const { addBookmarkData, removeBookmarkData, bookmarkState } = useBookmark();
  const { likePost, dislikePost, deletePost } = usePost();
  const [userDetails, setUserDetails] = useState({});
  const [isModalvisible, setIsModalVisible] = useState(false);

  const bookmarkedByUser = () =>
    bookmarkState?.bookmark?.filter((postId) => postId === _id)?.length !== 0;
  const likeByUser = () => {
    userPost?.like?.likeBy.filter((user) => user._id === currentUser?._id);
  };
  const toggleLikeHandler = () => {
    if (likeByUser) {
      dislikePost(_id);
    } else {
      likePost(_id);
    }
  };
  useEffect(() => {
    setUserDetails(userState?.find((user) => user.username === username));
  }, [username, userState]);
  return (
    <div key={_id} className="HomePost">
      <div onClick={() => navigate(`/profile/${_id}`)}>
        <img src={currentUser?.avatarUrl} alt="avatar" />
        <h1>{`${userDetails?.firstName}${userDetails?.lastName}`}</h1>
      </div>
      <div>
        <p className="text-xs">{` ${new Date(createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}`}</p>
      </div>

      {bookmarkedByUser() ? (
        <button
          className="cursor-pointer"
          onClick={() => removeBookmarkData(_id)}
        >
          <i class="fa-solid fa-bookmark"></i> <span>Bookmarked</span>
        </button>
      ) : (
        <button className="cursor-pointer" onClick={() => addBookmarkData(_id)}>
          <i class="fa-solid fa-bookmark"></i> <span>Bookmark</span>
        </button>
      )}
      <div>
        <p onClick={() => navigate(`/details/${_id}`)}>detials</p>
      </div>
      {isModalvisible && usePost ? (
        <DeletePost
          deletePost={() => {
            deletePost(_id);
            setIsModalVisible(false);
          }}
        />
      ) : null}
      <div>
        <p>{content}</p>
        {Image && <img src={Image} alt="uploaded" />}
      </div>
      <div>
        <div onClick={toggleLikeHandler}>
          {likeByUser ? <button>liked</button> : <button>liked</button>}
        </div>
      </div>
    </div>
  );
};
