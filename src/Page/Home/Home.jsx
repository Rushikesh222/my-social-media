import { DisplayPost } from "../../Component/DisplayPost";

import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import { Header } from "../../Header/Header";
import { RightSide } from "../../Component/RightSide";
import { useAuthContext } from "../../Context/Authcontext";
import "./Home.css";
import { NewPost } from "../../Component/NewPost";
import { LeftSide } from "../../Component/LeftSide";
export const Home = () => {
  const { currentUser } = useAuthContext();
  const { postState } = usePost();
  const { userState } = useUser();
  console.log(postState);

  let userFeed = [];
  const loggedInUser = userState?.find(({ _id }) => _id === currentUser?._id);
  const followFeedPost = postState?.userPost?.filter(({ username }) => {
    const followUsernameArr = loggedInUser?.following?.map(
      (username) => username
    );
    return followUsernameArr?.includes(username);
  });
  userFeed = [
    ...userFeed,
    ...followFeedPost,
    ...postState?.userPost?.filter(
      ({ username }) => username === loggedInUser?.username
    ),
  ];
  console.log(userFeed);
  return (
    <div className="home-container">
      <LeftSide />

      <div className="home-displaypost-container">
        <div className="home_header">
          <h2>Home Page</h2>
        </div>
        <NewPost />
        {userFeed?.map((post) => (
          <div key={post._id}>
            <DisplayPost userPost={post} />
          </div>
        ))}
      </div>
      <RightSide />
    </div>
  );
};
