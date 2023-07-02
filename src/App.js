import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FriendList from "./components/FriendsList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend";
import FormSplitBill from "./components/FormSplitBill";

const App = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  function onClickHandler() {
    setShowAddUser(!showAddUser);
  }

  return (
    <>
      <FriendList />

      {showAddUser && <AddFriend onClick={onClickHandler} />}
      {!showAddUser && (
        <div className=" w-[420px] text-right ">
          <Button onClick={onClickHandler}>Add friend</Button>
        </div>
      )}

      <FormSplitBill />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
