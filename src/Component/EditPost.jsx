import "./EditPost.css";
import { useState } from "react";
import { usePost } from "../Context/Post-Context";
import { useAuthContext } from "../Context/Authcontext";
export const EditPost = ({ userPost, setShowEditPost }) => {
  const [postValue, setPostValue] = useState({
    _id: userPost?._id,
    content: userPost?.content,
  });
  const { editPostData } = usePost();
  const { currentUser } = useAuthContext();

  return (
    <div className="editbox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editPostData(postValue?._id, postValue);
        }}
      >
        <div className="editbox-input">
          <img src={currentUser?.avatarUrl} alt="avatar" />
          {postValue?.content && (
            <input
              type="text"
              id="contentpost"
              value={postValue?.content}
              onChange={(e) =>
                setPostValue({ ...postValue, content: e.target.value })
              }
            />
          )}
        </div>
        <div className="editbox-button">
          {" "}
          <button className="editbox_submitbutton" type="submit">
            Submit
          </button>
          <button
            className="editbox_discardbutton"
            type="button"
            onClick={() => setShowEditPost(false)}
          >
            Dicard
          </button>
        </div>
      </form>
    </div>
  );
};
