import { initialFriends } from "../utils/constants.js";
import Button from "./Button.js";
import Friend from "./Friend.js";

const FriendList = ({ friends, onSelect, selectedFriend }) => {
  return (
    <div className="w-[420px]">
      <ul className="m-5 w-[420px] rounded-2xl border-2 border-slate-200">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelect={onSelect}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
