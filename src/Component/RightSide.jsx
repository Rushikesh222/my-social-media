import { usePost } from "../Context/Post-Context";

import { useUser } from "../Context/user-context";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";

export const RightSide = () => {
  const { getUserPost } = usePost();
  const { userState, unfollowerUser, followerUser, userLoading } = useUser();
  const { currentUser, t } = useAuthContext();
  const navigate = useNavigate();
  const isFollowed = (userId) =>
    userState
      ?.find((user) => user._id === userId)
      ?.followers.some((user) => user._id === currentUser?._id);
  console.log(currentUser);
  return (
    <div>
      <h1>Suggestion for you</h1>
      {userLoading ? (
        <h2>Something</h2>
      ) : (
        userState?.slice(0, 5)?.map((user) => (
          <div key={user?._id}>
            {user?.username !== currentUser?.username ? (
              <div
                className="follower"
                onClick={() => {
                  getUserPost(user?.username);
                  navigate();
                }}
              >
                <img
                  src={user?.avatarUrl}
                  alt="avatar"
                  className="user-avatar"
                />
                <div>
                  <h1>{`${user?.firstName}`}</h1>
                  <p>{`${user?.username}`}</p>
                </div>
                {isFollowed(user?._id) ? (
                  <button onClick={() => unfollowerUser(user?._id)}>
                    following
                  </button>
                ) : (
                  <button onClick={() => followerUser(user?._id)}>
                    follow
                  </button>
                )}
              </div>
            ) : null}
          </div>
        ))
      )}
    </div>
  );
};
