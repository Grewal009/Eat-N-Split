import React from "react";
import ReactDOM from "react-dom/client";
import FriendList from "./components/FriendsList";

const App = () => {
  return (
    <>
      <FriendList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
