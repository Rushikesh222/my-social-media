import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./Page/Explore/Explore";
import { Login } from "./Page/Login/Login";
import { RequiresAuth } from "./Component/RequiredAuth";
import { SignUp } from "./Page/Signup/Signup";
import { Bookmark } from "./Page/Bookmark/Bookmark";
import { Home } from "./Page/Home/Home";
import { Profile } from "./Page/Profile/Profile";
import { PostDetail } from "./Page/PostDetails/PostDetail";
import { LeftSide } from "./Component/LeftSide";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/leftbar" element={<LeftSide />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/details/:postId" element={<PostDetail />} />

        <Route
          path="/feed"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
