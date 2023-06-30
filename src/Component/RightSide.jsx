import { usePost } from "../Context/Post-Context";
import { useUser } from "../Context/user-context";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";
import "./Rightside.css";

export const RightSide = () => {
  const { getUserPost } = usePost();
  const { userState, unfollowerUser, followerUser, userLoading } = useUser();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const isFollowed = (userId) =>
    userState
      ?.find((user) => user._id === userId)
      ?.followers.some((user) => user._id === currentUser?._id);
  return (
    <div className="Rightside-block">
      <div className="Rightside-header">
        <h1>Suggestion for you</h1>
      </div>
      <div className="profile-body">
        {userLoading ? (
          <h2>Something</h2>
        ) : (
          userState?.slice(0, 5)?.map((user) => (
            <div className="Rightside_body" key={user?._id}>
              {user?.username !== currentUser?.username ? (
                <div
                  className="Rightside-follower"
                  onClick={() => {
                    getUserPost(user?.username);
                    navigate(`/profile/${user?._id}`);
                  }}
                >
                  <div className="Rightside_buttonFollow">
                    <div className="Rightside_avatar">
                      <img src={user?.avatarUrl} alt="avatar" />
                    </div>
                    <div className="Rightside_headerText">
                      <h3>
                        {`${user?.firstName}`}
                        <span className="display_headerSpecial">
                          <span class="material-symbols-outlined Rightside_badge">
                            verified
                          </span>
                          @{user?.username}
                        </span>
                      </h3>
                    </div>

                    {isFollowed(user?._id) ? (
                      <button onClick={() => unfollowerUser(user?._id)}>
                        Following
                      </button>
                    ) : (
                      <button onClick={() => followerUser(user?._id)}>
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
