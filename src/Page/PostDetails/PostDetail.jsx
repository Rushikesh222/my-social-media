import { useEffect, useState } from "react";
import { RightSide } from "../../Component/RightSide";
import { useAuthContext } from "../../Context/Authcontext";
import { usePost } from "../../Context/Post-Context";
import { useUser } from "../../Context/user-context";
import axios from "axios";
import { Header } from "../../Header/Header";
import { useParams } from "react-router-dom";
import { DisplayPost } from "../../Component/DisplayPost";

export const PostDetail = () => {
  const { currentUser } = useAuthContext();
  const { postState, getUserPost } = usePost();
  const { userState } = useUser();
  const { postId } = useParams();
  const [postDetail, setpostDetails] = useState({});
  const [postloading, setPostLoading] = useState(false);

  const getPostDetials = async () => {
    try {
      setPostLoading(true);
      const { data, status } = await axios({
        method: "GET",
        url: `/api/posts/${postId}`,
      });
      if (status === 200 || status === 201) {
        setpostDetails(data?.post);
        setPostLoading(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getPostDetials();
  }, [postState.post]);

  return (
    <div>
      <h1>display post</h1>
      <Header />
      <div key={postDetail._id}>
        {postloading ? (
          <p>user is loading</p>
        ) : (
          <div>
            <DisplayPost userPost={postDetail} />
          </div>
        )}
      </div>
    </div>
  );
};
