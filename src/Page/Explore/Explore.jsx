// import { useContext } from "react";
// import { AuthContext } from "../../Context/Authcontext";
import { Header } from "../../Header/Header";
import { DisplayPost } from "../../Component/DisplayPost";
import { usePost } from "../../Context/Post-Context";
import { LeftSide } from "../../Component/LeftSide";
import { RightSide } from "../../Component/RightSide";
import "./landing.css";

export function Explore() {
  // const { currentUser } = useContext(AuthContext);
  // const exploreData = usePost?.post?.filter(
  //   (data) => data.username !== currentUser
  // );
  const { postState } = usePost();

  return (
    <div className="explore-container">
      <LeftSide />
      {postState?.post?.map((posts) => (
        <div key={posts._id}>
          <DisplayPost userPost={posts} />
        </div>
      ))}
      <RightSide />
    </div>
  );
}
