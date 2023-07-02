import Button from "./Button";

const Friend = ({ friend }) => {
  return (
    <li className="flex m-5 w-96">
      <img src={friend.image} alt={friend.name} className="rounded-full" />
      <div className="pl-3 w-60">
        <p className="text-slate-700 text-lg font-bold leading-6">
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
      <Button styletxt="px-4 bg-orange-400 rounded-lg h-8">Select</Button>
    </li>
  );
};

export default Friend;
