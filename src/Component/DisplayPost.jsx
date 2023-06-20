import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authcontext";
import { usePost } from "../Context/Post-Context";
import { useNavigate } from "react-router-dom";

export const DisplayPost = ({ userPost }) => {
  const { _id, content, Image, username, createdAt } = userPost;
  const navigate = useNavigate();
  const { token } = AuthContext();
  const { likePost, dislikePost, deletePost } = usePost();
  const [userDetails, setUserDetails] = useState({});
  const [isModalvisible, setIsModalVisible] = useState(false);

  return (
    <div key={_id} className="HomePost">
      <div
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
      </div>
    </div>
  );
};
