import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/Authcontext";
import { PostProvider } from "./Context/Post-Context";
import { BookmarkProvider } from "./Context/bookmark-context";
import { UserProvider } from "./Context/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <PostProvider>
          <UserProvider>
            <BookmarkProvider>
              <App />
            </BookmarkProvider>
          </UserProvider>
        </PostProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

makeServer();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
