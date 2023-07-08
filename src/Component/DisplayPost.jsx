import { useEffect, useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../Context/bookmark-context";
import { useAuthContext } from "../Context/Authcontext";
import { DeletePost } from "./DeletePost";
import { useUser } from "../Context/user-context";
import { EditPost } from "./EditPost";
import "./DisplayPost.css";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, likes, createdAt } = userPost;
  const navigate = useNavigate();

  const { userState } = useUser();
  const { currentUser } = useAuthContext();
  const { addBookmarkData, removeBookmarkData, bookmarkState } = useBookmark();
  const { likePost, dislikePost, deletePost } = usePost();
  const [userDetails, setUserDetails] = useState({});
  // const [isModalvisible, setIsModalVisible] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    setUserDetails(userState?.find((user) => user.username === username));
  }, [username, userState]);
  const bookmarkedByUser = () =>
    bookmarkState?.bookmark?.filter((postId) => postId._id === _id)?.length !==
    0;

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
        {showEditPost && (
          <EditPost userPost={userPost} setShowEditPost={setShowEditPost} />
        )}

        <div className="display_body">
          <div className="display_header">
            <div className="display_headerText">
              <div
                className="display_avatar "
                onClick={() => navigate(`/profile/${username}`)}
              >
                <img
                  className="profile_image"
                  src={userDetails?.avatarUrl}
                  alt="avatar"
                />
              </div>

              <h3
                onClick={() => {
                  navigate(`/profile/${userDetails?.username}`);
                }}
              >
                {`${userDetails?.firstName}${userDetails?.lastName}`}
                <span className="display_headerSpecial">
                  <span class="material-symbols-outlined display_badge">
                    verified
                  </span>
                  @{userDetails?.username}
                  <p>{` ${new Date(createdAt)
                    .toDateString()
                    .split(" ")
                    .slice(1, 4)
                    .join(" ")}`}</p>
                </span>
              </h3>
              <div className="more_option">
                <div
                  style={
                    showOption
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                  className="option-frame"
                >
                  <div className="info">
                    {usePost ? (
                      <DeletePost
                        deletePost={() => {
                          deletePost(_id);
                        }}
                      />
                    ) : null}
                  </div>
                  <div
                    onClick={() => setShowEditPost(!showEditPost)}
                    className="info"
                  >
                    Edit
                  </div>
                </div>
                <span
                  onClick={() => setShowOption(!showOption)}
                  class="material-symbols-outlined post-option"
                >
                  more_vert
                </span>
              </div>
            </div>
            <div className="display_HeaderDescription">
              <p>{content}</p>
            </div>
          </div>
          {Image && (
            <img
              onClick={() => navigate(`/details/${_id}`)}
              src={Image}
              alt="uploaded"
              className="content_image"
            />
          )}
          <div className="display_footer">
            <span class="material-symbols-outlined">repeat</span>

            <div className="like-button" onClick={toggleLikeHandler}>
              {likeByUser() ? (
                <i class="fas fa-heart" style={{ color: "#ff6347" }}></i>
              ) : (
                <i class="far fa-heart"></i>
              )}
              <p>{likes?.likeCount}</p>
            </div>

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
        </div>
      </div>
    </div>
  );
};
