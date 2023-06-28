import { DisplayPost } from "../../Component/DisplayPost";
import { usePost } from "../../Context/Post-Context";
import { useBookmark } from "../../Context/bookmark-context";
import { Header } from "../../Header/Header";
export const Bookmark = () => {
  const { bookmarkState } = useBookmark();
  const { postState } = usePost();

  console.log(bookmarkState, postState);

  // console.log(postState.post.map((items)=>items._id).find(()=>));
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
  );
};
