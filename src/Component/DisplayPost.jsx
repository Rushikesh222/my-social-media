import { useContext, useEffect, useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";
import { useBookmark } from "../Context/bookmark-context";
import { useAuthContext } from "../Context/Authcontext";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, createdAt } = userPost;

  const navigate = useNavigate();
  const { token } = useAuthContext();
  const { addBookmarkData, removeBookmarkData, bookmarkState } = useBookmark();
  const { likePost, dislikePost, deletePost } = usePost();
  const [userDetails, setUserDetails] = useState({});
  const [isModalvisible, setIsModalVisible] = useState(false);

  const bookmarkedByUser = () =>
    bookmarkState?.bookmark?.filter((postId) => postId === _id)?.length !== 0;
  return (
    <div key={_id} className="HomePost">
      <h3>{username}</h3>
      <img src={Image}></img>
      <p>{content}</p>
      <p className="text-xs">{` ${new Date(createdAt)
        .toDateString()
        .split(" ")
        .slice(1, 4)
        .join(" ")}`}</p>

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

      {/* <div
        className="cusor-pointer"
        onClick={() => navigate(`/profile/${username}`)}
      >
        <img src={userDetails?.avatarUrl} alt="avatar" className="avatar" />
        <h1>{`${userDetails?.firstName} ${userDetails?.lastName}`}</h1>
        <p className="text-xs">{` ${new Date(createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}`}</p>
      </div> */}
    </div>
  );
};
