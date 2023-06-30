import { useState } from "react";
import { usePost } from "../Context/Post-Context";
export const EditPost = ({ userPost, setShowEditPost }) => {
  const [postValue, setPostValue] = useState({
    _id: userPost?._id,
    content: userPost?.content,
  });
  const { editPostData } = usePost();

  return (
    <div>
      <h1>Edit Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editPostData(postValue?._id, postValue);
        }}
      >
        {postValue?.content && (
          <textarea
            id="contentpost"
            value={postValue?.content}
            onChange={(e) =>
              setPostValue({ ...postValue, content: e.target.value })
            }
          ></textarea>
        )}
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setShowEditPost(false)}>
          Dicard
        </button>
      </form>
    </div>
  );
};
