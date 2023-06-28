import { useEffect, useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../Context/bookmark-context";
import { useAuthContext } from "../Context/Authcontext";
import { DeletePost } from "./DeletePost";
import { useUser } from "../Context/user-context";
import "./DisplayPost.css";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, likes, createdAt } = userPost;

  const navigate = useNavigate();

  const { userState } = useUser();
  const { currentUser } = useAuthContext();
  const { addBookmarkData, removeBookmarkData, bookmarkState } = useBookmark();
  const { likePost, dislikePost, deletePost } = usePost();
  const [userDetails, setUserDetails] = useState({});
  const [isModalvisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setUserDetails(userState?.find((user) => user.username === username));
  }, [username, userState]);
  const bookmarkedByUser = () =>
    bookmarkState?.bookmark?.filter((postId) => postId._id === _id)?.length !==
    0;
  // console.log(bookmarkedByUser(), bookmarkState);
  const likeByUser = () =>
    userPost?.likes?.likedBy?.filter((user) => user._id === currentUser?._id)
      .length !== 0;

  const toggleLikeHandler = () => {
    if (likeByUser()) {
      dislikePost(_id);
    } else {
      likePost(_id);
    }
  };

  return (
    <div className="display-container">
      <div key={_id} className="display-details">
        <div
          className="display-profile"
          onClick={() => navigate(`/profile/${_id}`)}
        >
          <img
            className="display-image-avatar"
            src={currentUser?.avatarUrl}
            alt="avatar"
          />
          <h1 className="display-name-avatar">{`${userDetails?.firstName}${userDetails?.lastName}`}</h1>
          <p className="display-date">{` ${new Date(createdAt)
            .toDateString()
            .split(" ")
            .slice(1, 4)
            .join(" ")}`}</p>
        </div>
        <div
          className="display-content"
          onClick={() => navigate(`/details/${_id}`)}
        >
          {Image && (
            <img className="content-image" src={Image} alt="uploaded" />
          )}
          <p className="contente-details">{content}</p>
        </div>
        <div className="display-icon">
          <div className="bookmark-button">
            {bookmarkedByUser() ? (
              <div onClick={() => removeBookmarkData(_id)}>
                <i class="fas fa-bookmark"></i>
              </div>
            ) : (
              <div onClick={() => addBookmarkData(_id)}>
                <i class="far fa-bookmark"></i>
              </div>
            )}
          </div>
          <div className="like-button" onClick={toggleLikeHandler}>
            {likeByUser() ? (
              <i class="fas fa-heart" style={{ color: "#ff6347" }}></i>
            ) : (
              <i class="far fa-heart"></i>
            )}
          </div>
          <p>{likes?.likeCount}</p>
        </div>
        {isModalvisible && usePost ? (
          <DeletePost
            deletePost={() => {
              deletePost(_id);
              setIsModalVisible(false);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
