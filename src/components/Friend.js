const Friend = ({ friend }) => {
  return (
    <li className="flex m-5 w-64">
      <img src={friend.image} alt={friend.name} className="rounded-full" />
      <div className="pl-3">
        <p className="text-slate-700 text-lg font-bold leading-6">
          {friend.name}
        </p>
        {friend.balance < 0 && (
          <p className="text-red-500">
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-500">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && (
          <p className="text-slate-500">You and {friend.name} are even</p>
        )}
      </div>
    </li>
  );
};

export default Friend;
