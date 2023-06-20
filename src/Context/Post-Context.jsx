import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./Authcontext";
import axios from "axios";
import { toast } from "react-hot-toast";

const PostContext = createContext();
export const PostProvider = ({ childern }) => {
  const initialState = {
    postLoading: false,
    post: [],
    userPost: [],
  };
  const [postState, postDispatch] = useReducer(postReducer, initialState);
  const { token } = useContext(AuthContext);

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
    } catch (error) {
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
      console.log(e);
    }
  };

  const likePost = async (postId) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `/api/posts/like/${postId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        postDispatch({ type: "GET_POST", payload: data?.posts });
        return data.posts.find((post) => post._id === postId);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const dislikePost = async (postId) => {
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
      console.log(e);
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
      console.log(e);
    }
  };
  useEffect(() => {
    if (token) {
      getPostData();
    }
  }, [token]);

  return (
    <PostContext.Provider
      value={{ postState, getUserPost, likePost, dislikePost, deletePost }}
    >
      {childern}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);