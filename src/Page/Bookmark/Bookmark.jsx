import { DisplayPost } from "../../Component/DisplayPost";
import { usePost } from "../../Context/Post-Context";
import { useBookmark } from "../../Context/bookmark-context";
import { Header } from "../../Header/Header";
export const Bookmark = () => {
  const { bookmarkState } = useBookmark();
  const { postState } = usePost();
  return (
    <div>
      <Header />
      <h1>Bookmark Page </h1>
      {bookmarkState?.bookmark?.length === 0 ? (
        <h1>No bookmark</h1>
      ) : (
        <div>
          {bookmarkState?.isBookmarkLoading ? (
            <h1>booked</h1>
          ) : (
            <div>
              {bookmarkState?.bookmark?.map((postId) => {
                <div>
                  <h1>unbooked</h1>
                  <DisplayPost
                    userPost={postState?.post?.find(
                      (post) => post._id === postId
                    )}
                  />
                </div>;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
