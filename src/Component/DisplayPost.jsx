import { useContext, useEffect, useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../Context/bookmark-context";
import { useAuthContext } from "../Context/Authcontext";
import { DeletePost } from "./DeletePost";
import { useUser } from "../Context/user-context";
import "./DisplayPost.css";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, createdAt } = userPost;

  const navigate = useNavigate();

  const { userState } = useUser();
  const { currentUser } = useAuthContext();
  const { addBookmarkData, removeBookmarkData, bookmarkState } = useBookmark();
  const { likePost, dislikePost, deletePost, islikehandler } = usePost();
  const [userDetails, setUserDetails] = useState({});
  const [isModalvisible, setIsModalVisible] = useState(false);

  const bookmarkedByUser = () =>
    bookmarkState?.bookmark?.filter((postId) => postId === _id)?.length !== 0;

  const likeByUser = () => {
    return userPost?.likes?.likedBy?.find((user) =>
      user._id === currentUser?._id ? true : false
    );
  };
  console.log(islikehandler(_id));

  const toggleLikeHandler = () => {
    if (islikehandler(_id)) {
      dislikePost(_id);
    } else {
      likePost(_id);
    }
  };
  useEffect(() => {
    setUserDetails(userState?.find((user) => user.username === username));
  }, [username, userState]);
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
            {" "}
            {bookmarkedByUser() ? (
              <p onClick={() => removeBookmarkData(_id)}>
                <i class="far fa-bookmark"></i>
              </p>
            ) : (
              <p onClick={() => addBookmarkData(_id)}>
                <i class="fas fa-bookmark"></i>
              </p>
            )}
          </div>
          <div className="like-button" onClick={toggleLikeHandler}>
            {islikehandler(_id) ? (
              <i class="far fa-heart"></i>
            ) : (
              <i class="fas fa-heart"></i>
            )}
          </div>
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
