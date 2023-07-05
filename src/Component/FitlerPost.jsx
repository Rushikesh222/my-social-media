import { usePost } from "../Context/Post-Context";
import "./filterpost.css";
export const Filter = () => {
  const { postDispatch, postState } = usePost();
  return (
    <div className="filterpost">
      <div className="filter-button">
        <button
          className="trending-button"
          onClick={() => postDispatch({ type: "SORT", payload: "Trending" })}
        >
          Trending
        </button>
        <button
          className="latest-button"
          onClick={() => postDispatch({ type: "SORT", payload: "Latest" })}
        >
          Latest
        </button>
      </div>
      {postState.sortBy && <h1></h1>}
    </div>
  );
};
