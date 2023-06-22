import { useNavigate } from "react-router-dom";
import { usePost } from "../Context/Post-Context";

export const FollowCount = ({ arr, setShowModal, showModal }) => {
  const { getUserPost } = usePost();
  const navigate = useNavigate();
  return <div></div>;
};
