import { initialFriends } from "../utils/constants.js";
import Friend from "./Friend.js";

const FriendList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default FriendList;
