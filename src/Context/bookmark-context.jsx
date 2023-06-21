import axios from "axios";
import { AuthContext } from "./Authcontext";
import { bookmarkReducer } from "../Reducer/bookmark-reducer";
import { createContext, useContext, useEffect, useReducer } from "react";

const BookmarkContext = createContext();
export const BookmarkProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const initialState = {
    isBookmarkLoading: false,
    bookmark: [],
  };
  const [bookmarkState, bookmarkDispatch] = useReducer(
    bookmarkReducer,
    initialState
  );

  const getBookmarkData = async () => {
    try {
      bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: true });
      const { data, status } = await axios({
        method: "GET",
        url: "/api/users/bookmark",
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        bookmarkDispatch({ type: "SET_BOOKMARK", payload: data.bookmarks });
        bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: false });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const addBookmarkData = async (postId) => {
    try {
      bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: true });
      const { data, status } = await axios({
        method: "POST",
        url: `/api/users/bookmark/${postId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        bookmarkDispatch({ type: "SET_BOOKMARK", payload: data?.bookmarks });
        bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: false });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const removeBookmarkData = async (postId) => {
    try {
      bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: true });
      const { data, status } = await axios({
        method: "POST",
        url: `/api/users/remove-bookmar/${postId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        bookmarkDispatch({ type: "SET_BOOKMARK", payload: data?.bookmarks });
        bookmarkDispatch({ type: "BOOKMARK_LOADING", payload: false });
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    if (token) {
      getBookmarkData();
    }
  }, [token]);
  return (
    <BookmarkContext.Provider
      value={{ addBookmarkData, removeBookmarkData, bookmarkState }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
export const useBookmark = () => useContext(BookmarkContext);
