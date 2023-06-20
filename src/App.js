import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { UserFeed } from "./Page/User-Feed/Userfeed";
import { Login } from "./Page/Login/Login";
import { RequiresAuth } from "./Component/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          element={
            <RequiresAuth>
              <UserFeed />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
