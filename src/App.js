import React from "react";
import ReactDOM from "react-dom/client";
import FriendList from "./components/FriendsList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend";

const App = () => {
  return (
    <>
      <FriendList />

      <AddFriend />
      <Button>Add friend</Button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
