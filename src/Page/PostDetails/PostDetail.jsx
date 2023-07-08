import { useEffect, useState } from "react";
import { RightSide } from "../../Component/RightSide";
import { usePost } from "../../Context/Post-Context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DisplayPost } from "../../Component/DisplayPost";
import { LeftSide } from "../../Component/LeftSide";
import "./Postdetails.css";
export const PostDetail = () => {
  const { postState, getUserPost } = usePost();

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
    <div className="postdetials-container">
      <LeftSide />
      <div className="display-postdetials" key={postDetail._id}>
        {postloading ? (
          <p>user is loading</p>
        ) : (
          <div>
            <DisplayPost userPost={postDetail} />
          </div>
        )}
      </div>
      <RightSide />
    </div>
  );
};
