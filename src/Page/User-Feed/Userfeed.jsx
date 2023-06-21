import { useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";
import { Header } from "../../Header/Header";
import { DisplayPost } from "../../Component/DisplayPost";
import { usePost } from "../../Context/Post-Context";

export function UserFeed() {
  const { currentUser } = useContext(AuthContext);
  const exploreData = usePost?.post?.filter(
    (data) => data.username === currentUser
  );
  console.log(usePost);
  return (
    <div>
      <Header />
      {exploreData?.map((posts) => (
        <div key={posts._id}>
          <DisplayPost userPost={posts} />
        </div>
      ))}

      <h1>UserFeed</h1>
      <h2>{currentUser.username}</h2>
    </div>
  );
}
