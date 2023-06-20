import { useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";
import { Header } from "../../Header/Header";
import { DisplayPost } from "../../Component/DisplayPost";

export function UserFeed() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <Header />
      <DisplayPost />
      <h1>UserFeed</h1>
      <h2>{currentUser.username}</h2>
    </div>
  );
}
