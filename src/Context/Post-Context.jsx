import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuthContext } from "../Context/Authcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { postReducer } from "../Reducer/post-reducer";

const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const initialState = {
    postLoading: false,
    post: [],
    userPost: [],
  };
  const [postState, postDispatch] = useReducer(postReducer, initialState);
  const { token, currentUser } = useAuthContext();
  console.log(token);
  const getPostData = async () => {
    try {
      postDispatch({ type: "POST_LOADING", payload: true });
      const { data, status } = await axios({
        method: "GET",
        url: "/api/posts",
      });
      if (status === 200 || status === 201) {
        postDispatch({ type: "GET_POST", payload: data?.posts });
        postDispatch({ type: "POST_LOADING", payload: false });
      }
    } catch (e) {
      toast.error(e.response.data.errors[0]);
    }
  };
  const getUserPost = async (username) => {
    try {
      postDispatch({ type: "POST_LOADING", payload: true });
      const { data, status } = await axios({
        method: "GET",
        url: `/api/posts/user/${username}`,
      });
      if (status === 200 || status === 201) {
        postDispatch({ type: "USER_POST", payload: data?.posts });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const likePost = async (postId) => {
    console.log(postId);
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `/api/posts/like/${postId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        postDispatch({ type: "GET_POST", payload: data?.posts });
        postDispatch({ type: "GET_USER", payload: data?.posts });
        return data.posts.find((post) => post._id === postId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const dislikePost = async (postId) => {
    console.log(postId);
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `/api/posts/dislike/${postId}`,
        headers: { authorization: token },
      });

      if (status === 200 || status === 201) {
        postDispatch({ type: "GET_POST", payload: data?.posts });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const deletePost = async (postId) => {
    try {
      const { data, status } = await axios({
        method: "DELETE",
        url: `/api/posts/${postId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        postDispatch({ type: "GET_POST", payload: data?.posts });
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(currentUser, initialState.post);
  const islikehandler = (postId) => {
    return initialState.post
      .find((items) => items?._id === postId)
      .likes?.likedBy?.find(
        ({ username }) => username === currentUser?.username
      )
      ? true
      : false;
  };
  useEffect(() => {
    if (token) {
      getPostData();
    }
  }, [token]);
  useEffect(() => {
    getPostData();
  }, []);
  return (
    <PostContext.Provider
      value={{
        postState,
        islikehandler,
        getUserPost,
        likePost,
        dislikePost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
