import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuthContext } from "../Context/Authcontext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { postReducer } from "../Reducer/post-reducer";
const PostContext = createContext();
export const PostProvider = ({ children }) => {
  const initialState = {
    postLoading: false,
    post: [],
    userPost: [],
    sortBy: "latest",
  };
  const [postState, postDispatch] = useReducer(postReducer, initialState);
  const { token } = useAuthContext();
  const [postText, setPostText] = useState("");
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
        postDispatch({ type: "POST_LOADING", payload: false });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const createPost = async (postText) => {
    try {
      postDispatch({ type: "POST_LOADING", payload: true });
      const { data, status } = await axios({
        method: "POST",
        url: "/api/posts",
        headers: { authorization: token },
        data: {
          postData: { content: postText },
        },
      });
      console.log(data);
      if (status === 201 || status === 200) {
        postDispatch({ type: "POST_LOADING", payload: false });
        postDispatch({ type: "GET_POST", payload: data?.posts });
      }
    } catch (error) {
      console.error(error, "here");
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
  const editPostData = async (postId, postData) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `api/posts/edit/${postId}`,
        headers: { authorization: token },
        data: {
          postData,
        },
      });

      if (status === 201 || status === 200) {
        console.log(data);
        postDispatch({ type: "GET_POST", payload: data?.posts });
        toast.success("Post edited successfully!");
      }
    } catch (error) {
      console.error(error);
    }
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
        createPost,
        getUserPost,
        likePost,
        dislikePost,
        deletePost,
        postText,
        setPostText,
        editPostData,
        postDispatch,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
