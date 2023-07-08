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
  console.log(postState);

  return (
    <div className="explore-container">
      <LeftSide />
      <div className="display_explorepost">
        {postState?.post?.map((post) => (
          <div key={post._id}>
            <DisplayPost userPost={post} />
          </div>
        ))}
      </div>

      <RightSide />
    </div>
  );
}
