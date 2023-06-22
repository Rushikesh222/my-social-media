import { useAuthContext } from "../Context/Authcontext";

export const NewPost = () => {
  const { currentUser } = useAuthContext();
  return (
    <div>
      <img src={currentUser?.avatarUrl} alt="avatar" />
      <textarea></textarea>
    </div>
  );
};
