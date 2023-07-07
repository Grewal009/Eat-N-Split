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

  function handleSplitBill(val) {
    setFriends((fr) =>
      fr.map((f) =>
        f.id === selectedFriend?.id ? { ...f, balance: f.balance + val } : f
      )
    );
    setSelectedFriend(false);
  }

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
    <div className="flex items-center justify-start">
      <div>
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
      </div>
      <div className="ml-10">
        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            handleSplitBill={handleSplitBill}
          />
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
