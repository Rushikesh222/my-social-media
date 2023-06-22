import { useParams } from "react-router-dom";
import { useAuthContext } from "../../Context/Authcontext";
import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import { useEffect, useState } from "react";
import { RightSide } from "../../Component/RightSide";
import { DisplayPost } from "../../Component/DisplayPost";
import axios from "axios";

export const Profile = () => {
  const { userId } = useParams();
  const { currentUser } = useAuthContext();
  const { postState, getUserPost } = usePost();
  const { userState, unfollowerUser, followerUser } = useUser();
  const [userData, setUserData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    type: "",
  });

  const getUserDetails = async () => {
    try {
      setDataLoading(true);
      const { data, status } = await axios({
        method: "GET",
        url: `/api/users/${userId}`,
      });
      if (status === 200 || status === 201) {
        setUserData(data?.user);
        setDataLoading(false);
        getUserPost(userId);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [userId, postState.post, userState]);

  const isFollowed = (userId) => {
    userState
      ?.find((user) => user._Id === userId)
      ?.followers.some((user) => user._id === currentUser?._id);
  };

  return (
    <div>
      <h1 style={{ filter: showModal.show ? "blur(8px)" : "" }}>Profile</h1>
      {dataLoading ? (
        <h1>profile user</h1>
      ) : (
        <div>
          {userData?.avatarUrl ? (
            <img src={userData?.avatarUrl} alt="avatar" />
          ) : (
            <div>{currentUser?.user?.firstName?.slice(0, 1)}</div>
          )}
          <div>
            <h1>{`${userData?.firstName} ${userData?.lastName}`}</h1>
            <p>{`${userData?.username}`}</p>
          </div>
        </div>
      )}

      {userData?.username === currentUser?.username ? (
        <button>check</button>
      ) : isFollowed(userData?._id) ? (
        <button onClick={() => unfollowerUser(userData?._id)}>following</button>
      ) : (
        <button onClick={() => followerUser(userData?._id)}>follow</button>
      )}

      <p>
        {`${new Date(userData?.createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" ")}`}
      </p>

      <div>
        <p>{postState?.userPost?.length === 1 ? "Post" : "Posts"}</p>
        <p
          onClick={() =>
            setShowModal((showModal) => ({
              ...showModal,
              show: true,
              type: "Followers",
            }))
          }
        >
          make
          {userData?.followers?.length === 1 ? "follower" : "followers"}
        </p>
        <p
          onClick={() =>
            setShowModal((showModal) => ({
              ...showModal,
              show: true,
              type: "Following",
            }))
          }
        >
          {userData?.following?.length +
            `${
              userData?.following?.length === 1 ? " Following" : " Followings"
            }`}
        </p>
      </div>

      <hr />

      {postState?.userPost?.map((post) => (
        <div>
          <DisplayPost userPost={post} />
        </div>
      ))}
      <RightSide />
    </div>
  );
};
