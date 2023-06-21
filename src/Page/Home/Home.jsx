import { useContext } from "react";
import { DisplayPost } from "../../Component/DisplayPost";
import { AuthContext } from "../../Context/Authcontext";
import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import { Header } from "../../Header/Header";

export const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const { postState } = usePost();
  const { userState } = useUser();

  let userFeed = [];
  const loggedInUser = userState?.find(({ _id }) => _id === currentUser?._id);
  const followFeedPost = postState?.post?.filter(({ username }) => {
    const followUsernameArr = loggedInUser?.following?.map(
      (username) => username
    );
  });
  userFeed = [
    ...userFeed,
    ...followFeedPost,
    ...postState?.post?.filter(
      ({ username }) => username === loggedInUser?.username
    ),
  ];

  return (
    <div>
      <Header />
      <h1>Home Page</h1>

      {userFeed?.map((posts) => (
        <div key={posts._id}>
          <DisplayPost userPost={posts} />
        </div>
      ))}
    </div>
  );
};
