import { useParams } from "react-router-dom";
import { useAuthContext } from "../../Context/Authcontext";
import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import { useEffect, useState } from "react";
import { RightSide } from "../../Component/RightSide";
import { DisplayPost } from "../../Component/DisplayPost";
import { EditProfile } from "../../Component/EditProfile";
import axios from "axios";
import "./profile.css";
export const Profile = () => {
  const { username } = useParams();
  const { currentUser } = useAuthContext();
  const { postState, getUserPost } = usePost();
  const { userState, unfollowerUser, followerUser } = useUser();
  const [userData, setUserData] = useState({});
  const [dataLoading, setDataLoading] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    type: "",
  });

  const [showEditModal, setShowEditModal] = useState(() =>
    userData?.username === userState?.username ? true : false
  );

  const getUserDetails = async () => {
    try {
      setDataLoading(true);
      const { data, status } = await axios({
        method: "GET",
        url: `/api/users/${username}`,
      });
      if (status === 200 || status === 201) {
        setUserData(data?.user);
        getUserPost(username);
        setDataLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, [username, userState]);

  const isFollowed = (username) => {
    userState
      ?.find((user) => user.username === username)
      ?.followers.some((user) => user._id === currentUser?._id);
  };

  return (
    <div className="profile-container">
      <h1 style={{ filter: showModal.show ? "blur(8px)" : "" }}>Profile</h1>
      {dataLoading ? (
        <h1>Profile User</h1>
      ) : (
        <div className="profile-text">
          {userData?.avatarUrl ? (
            <img src={userData?.avatarUrl} alt="avatar" />
          ) : (
            <div>{currentUser?.user?.firstName?.slice(0, 1)}</div>
          )}
          <div className="profile-infotext">
            <h1>{`${userData?.firstName} ${userData?.lastName}`}</h1>
            <p>@{`${userData?.username}`}</p>
          </div>
        </div>
      )}

      {userData?.username === currentUser?.username ? (
        <p></p>
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

      <div className="profile-contact">
        <p>
          {" "}
          <h3>{postState?.userPost?.length}</h3>
          {postState?.userPost?.length === 1 ? "Post" : "Posts"}
        </p>
        <p
          onClick={() =>
            setShowModal((showModal) => ({
              ...showModal,
              show: true,
              type: "Followers",
            }))
          }
        >
          <h3>{userData?.followers?.length}</h3>

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
          <h3>{userData?.following?.length}</h3>

          {userData?.following?.length === 1 ? " Following" : " Followings"}
        </p>
      </div>
      {showEditModal ? (
        <button
          onClick={() => setShowData(!showData)}
          className="profile-editbutton"
        >
          Edit Profile
        </button>
      ) : (
        <p></p>
      )}

      {showData && (
        <EditProfile
          userObj={userData}
          setShowEditModal={setShowEditModal}
          showEditModal={showEditModal}
        />
      )}

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
