import { DisplayPost } from "../../Component/DisplayPost";
import { LeftSide } from "../../Component/LeftSide";
import { RightSide } from "../../Component/RightSide";
import { usePost } from "../../Context/Post-Context";
import { useBookmark } from "../../Context/bookmark-context";

import "./Bookmark.css";
export const Bookmark = () => {
  const { bookmarkState } = useBookmark();
  const { postState } = usePost();

  return (
    <div className="bookmark-container">
      <LeftSide />
      <div className="display-bookmark">
        {bookmarkState?.bookmark?.length === 0 ? (
          <h1>No bookmark</h1>
        ) : (
          <div>
            {bookmarkState?.isBookmarkLoading ? (
              <h1>booked</h1>
            ) : (
              <div>
                {bookmarkState?.bookmark?.map((postId) => {
                  const bookmarkdata = postState?.post?.find(
                    (post) => post?._id === postId._id
                  );
                  console.log(postId, bookmarkdata);

                  return (
                    <div>
                      <DisplayPost userPost={bookmarkdata} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      <RightSide />
    </div>
  );
};
