import { DisplayPost } from "../../Component/DisplayPost";

import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import { Header } from "../../Header/Header";
import { RightSide } from "../../Component/RightSide";
import { useAuthContext } from "../../Context/Authcontext";
import "./Home.css";
import { NewPost } from "../../Component/NewPost";
export const Home = () => {
  const { currentUser } = useAuthContext();
  const { postState } = usePost();
  const { userState } = useUser();

  let userFeed = [];
  const loggedInUser = userState?.find(({ _id }) => _id === currentUser?._id);
  const followFeedPost = postState?.post?.filter(({ username }) => {
    const followUsernameArr = loggedInUser?.following?.map(
      (username) => username
    );
    return followUsernameArr?.includes(username);
  });
  userFeed = [
    ...userFeed,
    ...followFeedPost,
    ...postState?.post?.filter(
      ({ username }) => username === loggedInUser?.username
    ),
  ];

  return (
    <div className="home-container">
      <div className="home-header-container">
        <Header />
      </div>

      <div className="home-displaypost-container">
        <h1>Home Page</h1>
        <NewPost />
        {userFeed?.map((posts) => (
          <div key={posts._id}>
            <DisplayPost userPost={posts} />
          </div>
        ))}
      </div>
      <div className="home-rightside-container">
        <RightSide />
      </div>
    </div>
  );
};
