import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import FriendList from "./components/FriendsList";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { initialFriends } from "./utils/constants";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddUser, setShowAddUser] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function onClickHandler() {
    setShowAddUser((show) => !show);
  }
  function addFriendHandler(frnd) {
    setFriends((frnds) => [...frnds, frnd]);
  }
  function onSelectFriend(frn) {
    //setSelectedFriend(frn);
    setSelectedFriend((selected) => (selected?.id === frn?.id ? null : frn));
    setShowAddUser(false);
  }
  return (
    <>
      <FriendList
        friends={friends}
        onSelect={onSelectFriend}
        selectedFriend={selectedFriend}
      />

      {showAddUser && (
        <AddFriend onClick={onClickHandler} addHandler={addFriendHandler} />
      )}
      {!showAddUser && (
        <div className=" w-[420px] text-right ">
          <Button onClick={onClickHandler}>Add friend</Button>
        </div>
      )}

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
