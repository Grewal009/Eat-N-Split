import { initialFriends } from "../utils/constants.js";
import Friend from "./Friend.js";

const FriendList = () => {
  const friends = initialFriends;
  return (
    <ul className="m-5 w-[420px] rounded-2xl border-2 border-slate-200">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
