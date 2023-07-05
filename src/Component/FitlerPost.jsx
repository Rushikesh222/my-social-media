import { usePost } from "../Context/Post-Context";

export const Filter = () => {
  const { postDispatch, postState } = usePost();
  return (
    <div>
      <div className="filter-button">
        <button
          onClick={() => postDispatch({ type: "SORT", payload: "Trending" })}
        >
          Trending
        </button>
        <button
          onClick={() => postDispatch({ type: "SORT", payload: "Latest" })}
        >
          Latest
        </button>
      </div>
      {postState.sortBy && <h1>{postState?.sortBy}Posts</h1>}
    </div>
  );
};
