// import { useContext } from "react";
// import { AuthContext } from "../../Context/Authcontext";
import { Header } from "../../Header/Header";
import { DisplayPost } from "../../Component/DisplayPost";
import { usePost } from "../../Context/Post-Context";

export function Explore() {
  // const { currentUser } = useContext(AuthContext);
  // const exploreData = usePost?.post?.filter(
  //   (data) => data.username !== currentUser
  // );
  const { postState } = usePost();

  return (
    <div>
      <Header />
      <h1>UserFeed</h1>
      {postState?.post?.map((posts) => (
        <div key={posts._id}>
          <DisplayPost userPost={posts} />
        </div>
      ))}
    </div>
  );
}
