import { DisplayPost } from "../../Component/DisplayPost";

import { usePost } from "../../Context/Post-Context";
// import { useUser } from "../../Context/user-context";
// import { Header } from "../../Header/Header";
import { RightSide } from "../../Component/RightSide";
import { useAuthContext } from "../../Context/Authcontext";
import "./Home.css";
import { NewPost } from "../../Component/NewPost";
import { LeftSide } from "../../Component/LeftSide";
import { Filter } from "../../Component/FitlerPost";

export const Home = () => {
  const { currentUser } = useAuthContext();
  const { postState } = usePost();
  // const { userState } = useUser();
  console.log(postState);

  let userFeed = [];
  const followFeedPost = postState?.post?.filter(({ username }) => {
    const followUsernameArr = currentUser?.user?.following?.map(
      ({ username }) => username
    );
    return followUsernameArr?.includes(username);
  });
  userFeed = [
    ...userFeed,
    ...followFeedPost,
    ...postState?.post?.filter(
      ({ username }) => username === currentUser?.username
    ),
  ];

  if (postState?.sortBy === "Trending") {
    userFeed = userFeed.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else if (postState?.sortBy === "Latest") {
    userFeed = userFeed.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  return (
    <div className="home-container">
      <LeftSide />
      <div className="home-displaypost-container">
        <div className="home_header">
          <h2>Home Page</h2>
        </div>
        <NewPost />
        <Filter />
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
