import Button from "./Button";

const Friend = ({ friend, onSelect }) => {
  return (
    <li className="m-5 flex">
      <img src={friend.image} alt={friend.name} className="rounded-full" />
      <div className="w-60 pl-3">
        <p className="text-lg font-bold leading-6 text-slate-700">
          {friend.name}
        </p>
        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-500 ">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && (
          <p className="text-slate-500">You and {friend.name} are even</p>
        )}
      </div>
      <Button onClick={() => onSelect(friend.name)}>Select</Button>
    </li>
  );
};

export default Friend;
